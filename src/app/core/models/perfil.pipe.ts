import { Pipe, PipeTransform } from '@angular/core';

import { Perfil } from './perfil';

@Pipe({name: 'perfil'})
export class PerfilPipe implements PipeTransform {
    transform(value: string): string {
        switch  (value) {
            case Perfil.ADMIN: {
                return 'Administrador';
            }
            case Perfil.GUEST: {
                return 'Convidado';
            }
            default: {
                return value;
            }
        }
    }
}
