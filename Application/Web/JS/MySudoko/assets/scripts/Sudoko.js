'use strict';

$(() => {
    $('#divTable').html(CreateTable(9));

    let tds = $('td:contains(0)');
    tds.css({ color: 'red' });
    $('body').append(`<h3 style="width: 100%; text-align: center">${tds.length}</h3>`)
});

//#region 

let isInvert = false;
let isFirst = false;
let data = [];
let sqrt;
let count = 0;

const divider = (trIndex, tdIndex, totalCount) => {

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
        // setNumberSequence(trIndex, tdIndex, totalCount);
        return !isInvert;
    }
    // setNumberSequence(trIndex, tdIndex, totalCount);
    return (
        isInvert
    );
};

const CreateTable = (tableSize) => {
    sqrt = Math.sqrt(tableSize);
    data = JSON.parse(JSON.stringify(new Array(tableSize).fill(JSON.parse(JSON.stringify(new Array(tableSize))))));
    var tableHTML = "<table id='tblCells' cellpadding='10' cellspacing='0' >";

    initData(tableSize);

    for (let trIndex = 0; trIndex < tableSize; trIndex++) {
        tableHTML += '<tr>';
        for (let tdIndex = 0; tdIndex < tableSize; tdIndex++) {
            tableHTML += `<td 
            contenteditable ${divider(trIndex, tdIndex, tableSize) ? `style="background-color: #000000;"` : ''} 
            onkeyup='increment_decrement(event, ${trIndex}, ${tdIndex}, ${tableSize})' 
            onfocus="document.execCommand('selectAll',false,null)" 
            onclick="document.execCommand('selectAll',false,null)" 
            onkeydown="inputCell(event, ${trIndex}, ${tdIndex})"
            >${data[trIndex][tdIndex] || 0}</td>`;
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

const setNumberSequence = (trIndex, tdIndex, totalCount, randomSet = false) => {

    let fromTr = ((trIndex / sqrt) >> 0) * sqrt;
    let toTr = fromTr + sqrt;
    let fromTd = ((tdIndex / sqrt) >> 0) * sqrt;
    let toTd = fromTd + sqrt;
    var filterData = JSON.parse(JSON.stringify(data[trIndex]));

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

    return getRandomNumber(filterData, totalCount, randomSet);
}

const generateRandomNumber = (size, randomSet) => {
    if (randomSet) {
        return (
            Math.floor(Math.random() * (size + 1)) || 1
        );
    } else {
        if (count >= data.length) {
            count = 0;
        }
        count = count + 1;
        return count;
    }
}

const getRandomNumber = (filterData, totalCount, randomSet) => {
    let loopCount = [];
    let randomNumber = generateRandomNumber(totalCount, randomSet);

    while (filterData.indexOf(randomNumber) !== -1) {
        randomNumber = generateRandomNumber(totalCount, randomSet);
        if (loopCount.indexOf(randomNumber) === -1) {
            loopCount.push(randomNumber);
        } else if (loopCount.length === totalCount) {
            return 0;
        }
    }

    return randomNumber;
}

//#endregion

const initData = (tableSize) => {
    let td = 0 - sqrt;
    let tr = 0;
    let randomSet = true;
    // 0,1,2,3,4,5,6,7,8
    // let arr = [3, 2, 1, 0]; 5, 7, 2, 6, 1, 3
    let arr = [4, 0, 8, 1, 2, 3, 5, 6, 7];
    // let arr = [14, 12, 10, 4, 3, 5, 1, 7, 0, 2, 6, 8, 9, 11, 13, 15];
    for (let dataIndex = 0; dataIndex < tableSize; dataIndex++) {
        let dI = arr[dataIndex];
        count = 0;
        tr = (dI / sqrt >> 0) * sqrt;
        td = (dI - ((dI / sqrt >> 0) * sqrt)) * sqrt;
        if (dataIndex > 2) {
            randomSet = false;
        }
        let resetCount = 0;
        for (let trIndex = tr; trIndex < tr + sqrt; trIndex++) {
            for (let tdIndex = td; tdIndex < td + sqrt; tdIndex++) {
                let generatedNumber = setNumberSequence(trIndex, tdIndex, tableSize, randomSet);
                if (generatedNumber) {
                    data[trIndex][tdIndex] = generatedNumber;
                } else if (resetCount < 1000) {
                    trIndex = tr;
                    tdIndex = td;
                    resetCount++;
                    count = 0;
                }
            }
        }
    }
}