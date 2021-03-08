module.exports = function toReadable (number) {
    arrNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',];
    
    let numNum = Number(number);
    let numFirst = Math.floor((numNum/1)% 10);
    let numSecond = Math.floor((numNum/10)% 10);
    let numThird = Math.floor((numNum/100)% 10);
    let numDec = numNum % 100;
    let numDecStr = '';
    let numStr = '';

    switch (true) {
        case numDec < 21:
            numDecStr = arrNum[numDec];
        break;
        case numDec === 30:
            numDecStr = 'thirty';
        break;
        case numDec === 40:
            numDecStr = 'forty';
        break;
        case numDec === 50:
            numDecStr = 'fifty';
        break;
        case numDec === 80:
            numDecStr = 'eighty';
        break;
        case 20 < numDec && numDec < 30:
            numDecStr = `${arrNum[20]} ${arrNum[numFirst]}`;
        break;
        case 30 < numDec && numDec < 40:
            numDecStr = `${'thirty ' + arrNum[numFirst]}`;
        break;
        case 40 < numDec && numDec < 50:
            numDecStr = `${'forty ' + arrNum[numFirst]}`;
        break;
        case 50 < numDec && numDec < 60:
            numDecStr = `${'fifty ' + arrNum[numFirst]}`;
        break;
        case 79 < numDec && numDec < 90:
            numDecStr = `${'eighty ' + arrNum[numFirst]}`;
        break;
        case 59 < numDec && numDec < 100:
            if( numFirst === 0 ) {
                numDecStr = `${arrNum[numSecond] + 'ty'}`;
            } else {
            numDecStr = `${arrNum[numSecond] + 'ty'} ${arrNum[numFirst]}`;
            }
        break;
    }

    if( numThird === 0){
        numStr = numDecStr;
    } else {
        if( numSecond === 0 && numFirst === 0){
            numStr = `${arrNum[numThird] + ' hundred'}`;
        } else {
            numStr = `${arrNum[numThird] + ' hundred'} ${numDecStr}`;
        }
    }
    
    return numStr
}