import { Perfil } from './perfil';

export class User {

    name: string;
    userName: string;
    perfil: Perfil;

    constructor(init?: Partial<User>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
