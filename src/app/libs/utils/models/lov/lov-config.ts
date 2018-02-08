import { LovColumnDefs } from './lov-column-defs';
import { WildcardsFormat } from './lov.enum';

export interface LovConfig {
    tableConfig?: {
        columnDefs?: LovColumnDefs[];
        tableName?: string;
    };
    mapFields?: {};
    relatedFields?: string[];
    displaySeparator?: string;
    displayFields?: string[];
    serviceURI?: string;
    lovCondition?: {};
    wildcardsFormat?: WildcardsFormat;
    ignoreCondition?: boolean;
}
