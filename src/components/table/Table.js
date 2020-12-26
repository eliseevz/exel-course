import {ExelComponent} from "@core/ExelComponent";
import {createTable} from "@/components/table/table.template";

// import {$} from "@core/dom";
import {resizeTable} from "@/components/table/tableResize";

export class Table extends ExelComponent {
    // static className = 'exel__table'
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        });
    }


export class Table extends ExelComponent {
    static className() {
        return 'exel__table'
    }
    toHTML() {
        return createTable(20)
    }


    onMousedown(event) {
        if (event.target.dataset.resize) {
            resizeTable(event, this)
        }
    }
}
}

