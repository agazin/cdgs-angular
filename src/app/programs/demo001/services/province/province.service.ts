import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Province } from '../../models/province/Province';
import { Helpers } from '../../../../libs/utils/helpers/helpers';

@Injectable()
export class ProvinceService {

  selectedRow: BehaviorSubject<Province> = new BehaviorSubject({});

  // addEditURL = '/example/api/demoProvince';
  // serviceURL = '/cdgsTemplateServices/api/template/query/demoProvince';
  serviceURL = 'http://localhost:3000/province';

  constructor(
    private http$: HttpClient,
  ) { }

  findAll() {
    return this.http$.get(this.serviceURL);
  }

  findByCondition(conditon: Province, offset = 0, limit = 5) {
    let params: HttpParams = Helpers.mapModelToQueryParams(conditon);
    params = params
      .set('_start', `${offset}`)
      .set('_limit', `${limit}`);
    return this.http$.get<Province[]>(this.serviceURL, { params });
  }

  setSelectedRow(row: Province) {
    this.selectedRow.next(row);
  }

  addProvince(body: Province) {
    return this.http$.post(this.serviceURL, body);
  }

  editProvince(body: Province) {
    return this.http$.put(`${this.serviceURL}/${body.id}`, body);
  }

  deleteProvince(id: string) {
    return this.http$.delete(`${this.serviceURL}/${id}`);
  }

  getSelectedRow() {
    return this.selectedRow;
  }

}
