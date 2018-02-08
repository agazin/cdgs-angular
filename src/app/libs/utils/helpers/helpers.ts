import { HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

export class Helpers {

    static mapModelToQueryParams<T>(model: T, ignoreSearchParam = false): HttpParams {
        let params = new HttpParams();
        Object.keys(model).map(key => {
            if (model[key]) {
                params = params.set(
                    key,
                    (key === 'search' && !ignoreSearchParam)
                        ? `%${model[key]}%`
                        : model[key]
                );
            }
        });
        return params;
    }

    static isEmptyObject(object: any) {
        return Object.keys(object).map(key => key).length === 0;
    }

    static isEmptyList<T>(list: T[]) {
        return list.length === 0;
    }

    static copyFormGroup(targetForm: FormGroup) {
        const formDataProps: string[] = Object.keys(targetForm.value);
        const resFormData = new FormGroup({});
        formDataProps.forEach(dataProps => {
            resFormData.addControl(dataProps, targetForm.get(dataProps));
        });
        return resFormData;
    }

    static mapModelToSaveParam<T>(model: T) {
        Object.keys(model).map(key => {
            if (Object.prototype.toString.call(model[key]) === '[object Date]') {
                model[key] = new Date(model[key]).getTime();
            }
        });
        return model;
    }

}
