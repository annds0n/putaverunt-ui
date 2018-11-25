import { Perfil } from './perfil';

export class User {

    name: string;
    perfil: Perfil;

    constructor(init?: Partial<User>) {
            Object.assign(this, init);
    }
}
