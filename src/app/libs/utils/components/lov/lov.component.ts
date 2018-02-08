import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { LovService } from '../../services/lov/lov.service';
import { LOV_CONTEXT_URL } from '../../common/context-url/context-url';
import { StateAdaptor } from '../../common/state-adaptor/state-adaptor';
import {
  Lov,
  BACKSPACE_KEYCODE,
  ENTER_KEYCODE,
  TAB_KEYCODE,
  ESCAPE_KEYCODE
} from '../../common/base-lov/lov';
import { CommonResponse } from '../../models/common-response/common-response';
import { Helpers } from '../../helpers/helpers';
import { RootState } from '../../models/root-state';

@Component({
  selector: 'cdgs-lov',
  templateUrl: './lov.component.html',
  styleUrls: ['./lov.component.scss'],
  providers: [LOV_CONTEXT_URL, LovService],
})
export class LovComponent extends Lov {

  isDropDownClick = false;

  constructor(
    protected lovService: LovService,
    protected store$: Store<RootState>,
  ) {
    super(lovService, store$);
  }

  displayClearLovButton() {
    return this.hasQuery() && this.hasSelectedData() && !this.state.isFetching;
  }

  displayRedoButton() {
    return this.hasQuery() && !this.hasSelectedData() && !this.state.isFetching;
  }

  onKeypress(event: KeyboardEvent) {
    this.isKeypress = true;
    const KEY_ID = event.keyCode;
    switch (KEY_ID) {
      case BACKSPACE_KEYCODE:
        this.onBackspaceKeypress();
        break;
      case ESCAPE_KEYCODE:
        this.onEscapeKeypress();
        break;
      case ENTER_KEYCODE:
        this.selectLovData(this.filteredData[0]);
        break;
      default:
        break;
    }
  }

  // for autocomplete type
  searchData({ query }: { event: Event, query: string }) {
    this.findLovDataByCondition({ search: query })
      .debounceTime(300)
      .subscribe(data => {
        this.filteredData = data.results;
        this.setState({ isFetching: false });
      });
  }

  selectLovAutocompleteData(selectedData: any) {
    this.setState({ selectedData });
    this.selectLovData({ ...selectedData });
    this.query.setValue(this.setDisplayField(selectedData));
  }

  onBackspaceKeypress() {
    this.clearLovData();
  }

  onEscapeKeypress() {
    this.selectLovData(this.state.tempData);
  }

  onBlurLov(event: Event) {
    this.isKeypress = false;
    if (!this.hasSelectedData() && !this.isDropDownClick) {
      if (this.filteredData.length) {
        this.selectLovData(this.filteredData[0]);
      } else {
        this.clearLovData();
      }
    }
    this.isDropDownClick = false;
  }

  setDisplayDropdownList(dropDownItem: any) {
    let query;
    if (!dropDownItem) {
      return;
    }
    if (this.lovConfig.displayFields.length === 1) {
      const dbField: string = this.lovConfig.mapFields[this.lovConfig.displayFields[0]];
      query = dropDownItem[dbField];
    } else {
      query = this.lovConfig.displayFields
        .map(field => {
          const dbField: string = this.lovConfig.mapFields[field];
          return dropDownItem[field];
        })
        .join(this.lovConfig.displaySeparator);
    }
    return query;
  }

  dropDownClick(event: Event) {
    this.isDropDownClick = true;
  }

}
