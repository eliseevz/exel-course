import {$} from "@core/dom";

export function resizeTable(event, thisContext) {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    let delta
    if (event.target.dataset.resize === 'col') {
        const coords = $parent.getCoords()
        const symbolIndex = $parent.$el.innerText
        const $all = thisContext.$root.findAll(`[data-symbol="${symbolIndex}"]`)

        document.onmousemove = e => {
            delta = e.pageX - coords.right
            $resizer.css({
                bottom: '-1000px',
                opacity: 1,
                right: -delta + 'px'
            })
        }
        document.onmouseup = () => {
            $resizer.css({
                opacity: 0,
                bottom: '0',
                right: '0'
            })
            document.onmousemove = null
            document.onmouseup = null

            $all.forEach(node => {
                const $node = $(node)
                $node.css({width: (coords.width + delta) + 'px'})
            })
        }
    } else if (event.target.dataset.resize === 'row') {
        const coords = $parent.getCoords()
        console.log(coords)
        document.onmousemove = e => {
            console.log(e)
            delta = e.clientY - coords.bottom
            $resizer.css({
                right: '-1000px',
                opacity: 1,
                bottom: -delta + 'px'
            })
        }
        document.onmouseup = () => {
            $parent.css({height: (coords.height + delta) + 'px'})
            document.onmouseup = null
            document.onmousemove = null
            $resizer.css({
                right: '0',
                opacity: 0,
                bottom: 0
            })
        }
    }
}
