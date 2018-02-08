import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';
import * as Keycloak from 'keycloak-js';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AUTH_URL } from './auth-url.provider';
import { AuthHandler } from './auth-handler';
import { AuthResponse } from './auth-response';
import { JWTPayload } from './jwt-payload';
import { LOCAL_STORAGE } from '../common/local-storage/local-storage.provider';
import { LocalStorage } from '../common/local-storage/local-storage';
import { LoginCredentials } from '../models/login-credentials/login-credentials';

const KEYCLOAK_CONFIG_PATH = 'config/authentication/keycloak.json';

@Injectable()
export class AuthService implements AuthHandler {

    keyCloak = Keycloak(KEYCLOAK_CONFIG_PATH);
    isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        @Inject(AUTH_URL) private authURL: string,
        @Inject(LOCAL_STORAGE) private localStorage: LocalStorage,
        @Inject(DOCUMENT) private document: Document,
        private http$: HttpClient,
    ) { }

    login(credentials: LoginCredentials) {
        if (!credentials.userName || !credentials.password) {
            throw Error('ไมีข้อมูลของผู้ใช้งาน หรือรหัสผ่าน');
        }

        const body = new FormData();
        body.set('userName', credentials.userName);
        body.set('password', credentials.password);

        return this.http$.post<AuthResponse>(this.authURL, body)
            .do(res => this.setTokenSession(res));
    }

    logout() {
        this.localStorage.removeItem('token_id');
        this.localStorage.removeItem('expires_at');
    }

    isLoggedIn() {
        return !!this.localStorage.getItem('token_id');
        // return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = this.localStorage.getItem('expires_at');
        const expriresAt = JSON.parse(expiration);
        return moment(expriresAt);
    }

    setTokenSession(authResponse: AuthResponse) {
        const jwtPayload: JWTPayload = jwt.decode(authResponse.token);
        const expiredAt = moment().add(jwtPayload.exp, 'second');
        this.localStorage.setItem('token_id', authResponse.token);
        this.localStorage.setItem('expires_at', JSON.stringify(expiredAt.valueOf()));
    }

    keyCloakAuthen() {
        this.keyCloak.init({ onLoad: 'login-required' })
            .success((authenticated) => {
                if (!authenticated) {
                    this.document.location.reload();
                }

                this.isAuthenticated.next(!!this.keyCloak.token);
                this.setTokenFromKeycloak(this.keyCloak.token);

                Observable.interval(60000).subscribe(() => {
                    this.keyCloak.updateToken(70).success((refresh) => {
                        if (refresh) {
                            console.log('Token refreshed.');
                            this.setTokenFromKeycloak(this.keyCloak.token);
                        } else {
                            console.log('Token not refreshed, valid for '
                                + Math.round(this.keyCloak.tokenParsed.exp + this.keyCloak.timeSkew - new Date().getTime() / 1000)
                                + ' seconds');
                        }
                    }).error(() => {
                        console.error('Failed to refresh token');
                    });
                });
            });
    }

    setTokenFromKeycloak(tokenId: string) {
        this.localStorage.setItem('token_id', tokenId);
    }

}
