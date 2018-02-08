import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { CONTEXT_URL } from '../../common/context-url/context-url';
import { Helpers } from '../../helpers/helpers';
import { Observable } from 'rxjs/Observable';
import { LovConfig } from '../../models/lov/lov-config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LovState } from '../../models/lov/lov-state';
import { WildcardsFormat } from '../../models/lov/lov.enum';

@Injectable()
export class LovService {

  /**
   * @param http$ คือ service สำหรับเรียกใช้ HttpRequest
   * @param contextURL context url ของ lov
   */
  constructor(
    private http$: HttpClient,
    @Inject(CONTEXT_URL) private contextURL: string,
  ) {
  }

  getLovConfig() {
    return this.http$
      .get<LovState>('config/lov/lov.config.json');
  }

  /**
   * method สำหรับค้นหาข้อมูลของ lov ตาม id
   * @param serviceURI id ของ lov
   * @param condition เงื่อนไขที่ต้องการค้นหา
   */
  findLovDataByCondition<T>(serviceURI: string, condition: T) {
    const params = Helpers.mapModelToQueryParams<T>(condition, true);
    return this.http$.get<T>(`${this.contextURL}/${serviceURI}`, { params });
  }

  setSerchKeyPosition(searchKey: string, position: WildcardsFormat) {
    switch (position) {
      case WildcardsFormat.START:
        return `%${searchKey}`;
      case WildcardsFormat.END:
        return `${searchKey}%`;
      case WildcardsFormat.BOTH:
      default:
        return `%${searchKey}%`;
    }
  }

}
