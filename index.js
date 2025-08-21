// CALCULATOR PROGRAM
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

function rickRoll(){
    window.open('https://youtu.be/dQw4w9WgXcQ?si=nT6_FFyDi28RSaJr', '_blank');
}