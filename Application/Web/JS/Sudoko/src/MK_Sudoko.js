'use strict';

$(() => {
    $('#divTable').html(CreateTable(9));
});

let isInvert = false;
let isFirst = false;
let data = [
    ["[0, 0]", "[0, 1]", "[0, 2]", "[0, 3]", "[0, 4]", "[0, 5]", "[0, 6]", "[0, 7]", "[0, 8]"],
    ["[1, 0]", "[1, 1]", "[1, 2]", "[1, 3]", "[1, 4]", "[1, 5]", "[1, 6]", "[1, 7]", "[1, 8]"],
    ["[2, 0]", "[2, 1]", "[2, 2]", "[2, 3]", "[2, 4]", "[2, 5]", "[2, 6]", "[2, 7]", "[2, 8]"],
    ["[3, 0]", "[3, 1]", "[3, 2]", "[3, 3]", "[3, 4]", "[3, 5]", "[3, 6]", "[3, 7]", "[3, 8]"],
    ["[4, 0]", "[4, 1]", "[4, 2]", "[4, 3]", "[4, 4]", "[4, 5]", "[4, 6]", "[4, 7]", "[4, 8]"],
    ["[5, 0]", "[5, 1]", "[5, 2]", "[5, 3]", "[5, 4]", "[5, 5]", "[5, 6]", "[5, 7]", "[5, 8]"],
    ["[6, 0]", "[6, 1]", "[6, 2]", "[6, 3]", "[6, 4]", "[6, 5]", "[6, 6]", "[6, 7]", "[6, 8]"],
    ["[7, 0]", "[7, 1]", "[7, 2]", "[7, 3]", "[7, 4]", "[7, 5]", "[7, 6]", "[7, 7]", "[7, 8]"],
    ["[8, 0]", "[8, 1]", "[8, 2]", "[8, 3]", "[8, 4]", "[8, 5]", "[8, 6]", "[8, 7]", "[8, 8]"]
];

const divider = (trIndex, tdIndex, totalCount) => {
    let sqrt = Math.sqrt(totalCount);
    if (tdIndex === 0 && `${(trIndex + totalCount) / sqrt}`.indexOf('.') === -1) {
        isFirst = !isInvert;
    }
    if (`${(tdIndex + totalCount) / sqrt}`.indexOf('.') === -1) {
        isInvert = !isInvert;
    }
    if (tdIndex == 0) {
        isInvert = isFirst;
    } else if (tdIndex + 1 == totalCount && `${totalCount / 2}`.indexOf('.') === -1) {
        isInvert = !isInvert;
        setNumberSequence(trIndex, tdIndex, totalCount, sqrt, isFirst, !isInvert);
        return !isInvert;
    }
    setNumberSequence(trIndex, tdIndex, totalCount, sqrt, isFirst, isInvert);
    return (
        isInvert
    );
};

const CreateTable = (tableSize) => {
    var tableHTML = "<table id='tblCells' cellpadding='10' cellspacing='0' >";

    for (let trIndex = 0; trIndex < tableSize; trIndex++) {
        tableHTML += '<tr>';
        for (let tdIndex = 0; tdIndex < tableSize; tdIndex++) {
            tableHTML += `<td 
            contenteditable ${divider(trIndex, tdIndex, tableSize) ? `style="background-color: #000000;"` : ''} 
            onkeyup='increment_decrement(event, ${trIndex}, ${tdIndex}, ${tableSize})' 
            onfocus="document.execCommand('selectAll',false,null)" 
            onclick="document.execCommand('selectAll',false,null)" 
            onkeydown="inputCell(event, ${trIndex}, ${tdIndex})"
            >0</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>'

    return tableHTML;
}

const validate = (event, trIndex, tdIndex) => {
    if (event.target.innerText !== '0' && +event.target.innerText !== data?.[trIndex]?.[tdIndex]) {
        $(event.target).addClass('error');
    } else {
        $(event.target).removeClass('error');
    }
}

const inputCell = (event, trIndex, tdIndex) => {
    if (event.key === 'F5') {
        return;
    }
    event.preventDefault();

    if (`${event.key}`.match(/\b\d\b/ig)) {
        if (event.key === +event.target.innerText) {
            return false;
        } else {
            event.target.innerText = event.key;
            validate(event, trIndex, tdIndex);
        }
    }
    else {
        return false;
    }
}

const increment_decrement = (event, trIndex, tdIndex, totalCount) => {
    let prevTr;
    let prevTd;
    if (event.shiftKey || event.ctrlKey || event.altKey) {
        return;
    }
    if (event.key === 'ArrowUp') {
        prevTr = trIndex - 1;
        $(`tr:eq(${prevTr > -1 ? prevTr : 0}) td:eq(${tdIndex})`).focus();
    } else if (event.key === 'ArrowDown') {
        prevTr = trIndex + 1;
        $(`tr:eq(${prevTr < totalCount ? prevTr : totalCount - 1}) td:eq(${tdIndex})`).focus();
    } else if (event.key === 'ArrowRight') {
        prevTd = tdIndex + 1;
        $(`tr:eq(${trIndex}) td:eq(${prevTd < totalCount ? prevTd : totalCount - 1})`).focus();
    } else if (event.key === 'ArrowLeft') {
        prevTd = tdIndex - 1;
        $(`tr:eq(${trIndex}) td:eq(${prevTd > -1 ? prevTd : 0})`).focus();
    }
}

const setNumberSequence = (trIndex, tdIndex, totalCount, sqrt, isFirst, isInvert) => {
    let randomNumber;

    let fromTr = ((trIndex / sqrt) >> 0) * sqrt;
    let toTr = fromTr + sqrt;
    let fromTd = ((tdIndex / sqrt) >> 0) * sqrt;
    let toTd = fromTd + sqrt;
    var filterData = [];
    filterData = data[trIndex];

    for (let tr = 0; tr < totalCount; tr++) {
        if (filterData.indexOf(data[tr][tdIndex]) === -1) {
            filterData.push(data[tr][tdIndex]);
        }
    }

    for (let tr = fromTr; tr < toTr; tr++) {
        for (let td = fromTd; td < toTd; td++) {
            if (filterData.indexOf(data[tr][td]) === -1) {
                filterData.push(data[tr][td]);
            }
        }
    }


    console.log(fromTr, toTr, fromTd, toTd)
}

const getRandomNumber = () => (
    Math.floor(Math.random() * 10) || 1
)