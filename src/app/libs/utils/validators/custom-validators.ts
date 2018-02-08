import { FormControl, ValidationErrors } from '@angular/forms';
export class CustomValidators {

    static validateCitizenId(c: FormControl): ValidationErrors {
        let citizenid: string = CustomValidators.replaceChars(c.value, '-', '');
        citizenid = CustomValidators.replaceChars(citizenid, '_', '');
        citizenid = CustomValidators.replaceChars(citizenid, ' ', '');
        let isValid = true;
        let messageError = '';

        if (citizenid.length !== 13) {
            messageError = 'เลขบัตรประชาชนไม่ครบ 13 หลัก';
            isValid = false;
        }
        if (citizenid.length === 13) {
            for (let i = 0, sum = 0; i < 12; i++) {
                sum += parseFloat(citizenid.charAt(i)) * (13 - i);
                if ((11 - sum % 11) % 10 !== parseFloat(citizenid.charAt(12))) {
                    messageError = 'เลขบัตรประชาชนไม่ถูกต้อง';
                    isValid = false;
                } else {
                    messageError = '';
                    isValid = true;
                }
            }
        }
        const message = {
            'citizenId': {
                'message': messageError,
            }
        };
        return isValid ? null : message;
    }

    static replaceChars(str: string, out: any, add: any): string {
        let temp = '' + str;
        while (temp.indexOf(out) > -1) {
            const pos = temp.indexOf(out);
            temp = '' + (temp.substring(0, pos) + add + temp.substring((pos + out.length), temp.length));
        }
        return temp;
    }
}

