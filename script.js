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





















