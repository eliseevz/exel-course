import {ExelComponent} from "@core/ExelComponent";

export class Formula extends ExelComponent {
    // статическая - доступ без инстанса класса
    // static className = 'exel__fomula'
    static className() {
        return 'exel__formula'
    }

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log(this.$root)
        console.log('formula onInput: ' + event.target.textContent.trim())
    }

    onClick() {
        console.log('hello')
    }
}
