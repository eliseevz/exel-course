import {ExelComponent} from "@core/ExelComponent";
import {createTable} from "@/components/table/table.template";

export class Table extends ExelComponent {
    // static className = 'exel__table'
    static className() {
        return 'exel__table'
    }
    toHTML() {
        return createTable(20)
    }
}
