import { MenuItem } from 'primeng/primeng';
import { FormControl } from '@angular/forms';

import { TreeMenu } from './tree-menu';


export interface MenuState {
    currentMenu: TreeMenu;
    menuList: TreeMenu[];
    menuHistory: TreeMenu[];
    isFetching: boolean;
    invalidate: boolean;
    breadcrumb: MenuItem[];
    menuQuery: FormControl;
}
