import { TreeNode } from 'primeng/primeng';

import { Menu } from './menu';


export interface TreeMenu extends TreeNode {
    data?: Menu;
    children?: TreeMenu[];
}
