import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TreeMenu } from '../../models/menu/tree-menu';

@Injectable()
export class MenuService {

    constructor(
        private http$: HttpClient
    ) { }

    mockupMenu(): Observable<TreeMenu[]> {
        const mockMenuList: TreeMenu[] = [
            {
                data: {
                    id: 1,
                    label: 'Demo System',
                    level: 0,
                    type: 'system',
                    uri: 'demo',
                },
                children: [
                    {
                        data: {
                            id: 2,
                            label: 'Demo Single table Subsystem',
                            level: 1,
                            type: 'sub-system',
                            uri: 'sigle-table',
                        },
                        children: [
                            {
                                data: {
                                    id: 5,
                                    label: 'Demo01i001 - single table with filter table',
                                    level: 2,
                                    type: 'program',
                                    uri: 'demo01i001',
                                },
                            },
                            {
                                data: {
                                    id: 6,
                                    label: 'Demo01i002 - single table popup',
                                    level: 2,
                                    type: 'program',
                                    uri: 'demo0i1002',
                                },
                            },
                            {
                                data: {
                                    id: 7,
                                    label: 'Demo01i003 - single table replace page',
                                    level: 2,
                                    type: 'program',
                                    uri: 'demo0i1003',
                                },
                            },
                            {
                                data: {
                                    id: 8,
                                    label: 'Demo01i004 - single table with redux',
                                    level: 2,
                                    type: 'program',
                                    uri: 'demo01i004',
                                },
                            },
                        ],
                    },
                    {
                        data: {
                            id: 3,
                            label: 'Demo Report Subsystem',
                            level: 1,
                            type: 'sub-system',
                            uri: 'report',
                        },
                        children: [
                            {
                                data: {
                                    id: 9,
                                    label: 'Demo01r003 - Report',
                                    level: 2,
                                    type: 'program',
                                    uri: 'demo0r1003',
                                },
                            },
                        ],
                    },
                    {
                        data: {
                            id: 4,
                            label: 'Demo Process Subsystem',
                            level: 1,
                            type: 'sub-system',
                            uri: 'process',
                        },
                        children: [
                            {
                                data: {
                                    id: 10,
                                    label: 'Demo01p003 - Process',
                                    level: 2,
                                    type: 'program',
                                    uri: 'demo0p1003',
                                },
                            },
                        ],
                    }
                ],
            }
        ];
        return Observable.of(mockMenuList).delay(1000);
    }

}
