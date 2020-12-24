import {$} from "@core/dom";

export class Exel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || [] // Определяем компоненты
    }

    getRoot() {
        const $root = $.create('div', 'exel')
        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className())
            const component = new Component($el)
            //DEBUGGER
            if (component.name) {
                window['q' + component.name] = component
            }
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
        this.components.forEach(component => component.init())
    }
}
