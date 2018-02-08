import { AuthResponse } from './auth-response';
import { LoginCredentials } from '../models/login-credentials/login-credentials';

export abstract class AuthHandler {
    abstract login(credentials: LoginCredentials);
    abstract logout();
    abstract isLoggedIn(): boolean;
    abstract isLoggedOut(): boolean;
    abstract getExpiration();
    abstract setTokenSession(AuthResponse: AuthResponse): void;
}
