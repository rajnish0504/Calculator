let currentInput = 'a1';

document.getElementById('a1').addEventListener('focus', function() {
    currentInput = 'a1';
});

document.getElementById('a2').addEventListener('focus', function() {
    currentInput = 'a2';
});

function appendNumber(number) {
    document.getElementById(currentInput).value += number;
}

function add() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var a2 = parseFloat(document.getElementById('a2').value);
    var sum = a1 +a2;
    document.getElementById('answer').value = sum;
}

function sub() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var a2 = parseFloat(document.getElementById('a2').value);
    var sum = a1 - a2;
    document.getElementById('answer').value = sum;
}
function multi() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var a2 = parseFloat(document.getElementById('a2').value);
    var sum = a1 * a2;
    document.getElementById('answer').value = sum;
}
function divide() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var a2 = parseFloat(document.getElementById('a2').value);
    var sum = a1 / a2;
    document.getElementById('answer').value = sum;
}
