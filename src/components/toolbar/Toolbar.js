import {ExelComponent} from "@core/ExelComponent";

export class Toolbar extends ExelComponent {

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        });
    }
    // static className = 'exel__toolbar'
    static className() {
        return 'exel__toolbar'
    }

    toHTML() {
        return `
        <div class="button">
                <span class="material-icons">format_bold</span>
            </div>
            <div class="button">
                <span class="material-icons">format_italic</span>
            </div>
            <div class="button">
                <span class="material-icons">format_underlined</span>
            </div>
            <div class="button">
                <span class="material-icons">format_align_left</span>
            </div>
            <div class="button">
                <span class="material-icons">format_align_justify</span>
            </div>
            <div class="button">
                <span class="material-icons">format_align_right</span>
         </div>
        `
    }

    onClick(event) {
        console.log(event.target);
    }
}
