document.querySelector('.first_btn').onclick = checkLength

function checkLength() {
    let a = document.querySelector('.arr').value;
    document.querySelector('.task1Answer').innerHTML = a.length
}


document.querySelector('.second_btn').onclick = getFactorial

function getFactorial() {
    let result = document.querySelector('.num').value;
    if (result === 0 || result === 1)
        return 1;
    for (let i = result - 1; i >= 1; i--) {
        result *= i;
    }
    document.querySelector('.task2Answer').innerHTML = result
}


//выдает неправильный результат

document.querySelector('.third_btn').onclick = getRow

    function getRow() {
        let num1 = document.querySelector('.num1').value; 
        let num2 = document.querySelector('.num2').value; 
        let num3 = document.querySelector('.num3').value; 
        let allNumbers = num1.toString() + num2.toString() + num3.toString();
        document.querySelector('.task3Answer').innerHTML = allNumbers;
    } 
//


document.querySelector('.forth_btn').onclick = findCommonNumber;

function findCommonNumber() {

    const arg = document.querySelector('.arg').value;
    const arg2 = document.querySelector('.arg2').value;

    if (arg < arg2) {
        result = -1;
    } else if (arg > arg2) {
        result = 1;
    } else if (arg == arg2) {
        result = 0;
    }
    document.querySelector('.task4Answer').innerHTML = result;
}























