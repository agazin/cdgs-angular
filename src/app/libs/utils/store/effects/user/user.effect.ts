import { Injectable } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Injectable()
export class UserEffect {

    constructor(
        private userService: UserService,
    ) { }

}
