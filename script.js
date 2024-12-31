const display = document.getElementById ('display');
const external_display = document.getElementById ('external_display');

Shift = false;
Alpha = false;
Mode = false;


function AppendToExternalDisplay(element) {
    if (element === 'Shift') {
        external_display.value = 'Shift';
        Shift = true;
    }
    else if (element === 'Alpha') {
        external_display.value = 'Alpha';
        Alpha = true;
    }
    else {
        display.value = "";
        external_display.value = '';
        Shift = false;
        Alpha = false;
    }
}

function AppendToDisplay(element) {
    if (Shift) {
        if (element === '0') display.value += "Rnd(";
        else if (element === 'x') display.value += "P";
        else if (element === '/') display.value += 'C';
        else if (element === Ans) display.value += "%";
        Shift = false;
        external_display.value = "";
        console.log(Shift);
    }
    else if (element === 'mode') {
        display.value = '1. Calculate'
    }
    else display.value += element;
}

function Clear() {
    display.value = "";
}

function Calculate() {
    try {
        Ans = eval(display.value);
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

function DeleteElement() {
    display.value = display.value.slice(0, -1);
}

function On() {
    display.value = "";
    external_display.value = "";
}