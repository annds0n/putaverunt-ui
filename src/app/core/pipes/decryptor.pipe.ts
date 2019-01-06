import { Pipe, PipeTransform } from '@angular/core';
import { decryptText } from 'src/app/shared';

@Pipe({
    name: 'decryptText'
})

export class DecryptorPipe implements PipeTransform {
    transform(value: string, secret: string): string {
        return decryptText(value, secret);
    }
}
