function Add (num1, num2) {
    alert(parseInt(num1) + ' + ' + parseInt(num2) + ' = ' + parseInt(num1 + num2));
}

function Subtract (num1, num2) {
    alert(parseInt(num1) + ' - ' + parseInt(num2) + ' = ' +  parseInt(num1 - num2));
}

function Multiply (num1, num2) {
    alert(parseInt(num1) + ' * ' + parseInt(num2) + ' = ' +  parseInt(num1 * num2));
}

function Divide (num1, num2) {
    alert(parseInt(num1) + ' / ' + parseInt(num2) + ' = ' +  parseInt(num1 / num2) + ' Remainder: ' + parseInt(num1 % num2));
}

function Driver () {
    Add (4, 7);
    Subtract (4, 7);
    Multiply (4, 7);
    Divide (4, 7);
}