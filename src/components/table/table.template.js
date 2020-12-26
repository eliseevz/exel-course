const CODES = {
    A: 65,
    Z: 90
}

function createCell(index) {
    const dataSymbol = String.fromCharCode(CODES.A + index)
    return `
        <div class="cell" data-symbol="${dataSymbol}" contenteditable></div>

function createCell() {
    return `
        <div class="cell" contenteditable></div>
    `
}

function toColumn(col) {
    return `

        <div class="column" data-type="resizable"  data-symbol="${col}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>

        <div class="column">${col}</div>
    `
}

function createRow(content, index = '') {
    return `

        <div class="row" data-type="resizable">
            <div class="row-info">
                ${index}
                ${index === '' 
                ? '' 
                : '<div class="row-resize" data-resize="row"></div>'}
            </div>
            <div class="row-data" data-number="${index}">${content}</div>

        <div class="row">
            <div class="row-info">${index}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')


    const cells = new Array(colsCount)
        .fill('')
        .map((col, index) => {
            return createCell(index)
        })
        .join('')


    console.log(cols);

    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')

    console.log('rows: ' + cells);


    rows.push(createRow(cols))

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cells, i+1))
    }

    return rows.join('')
}
