export class UserCredentials {

    userName: string;
    password: string;

    constructor(init: Partial<UserCredentials>) {
        Object.assign(this, init);
     }
}
