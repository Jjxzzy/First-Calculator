// CALCULATOR PROGRAM
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    resizeDisplayText();
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

function resizeDisplayText(){
    console.log(display.value.length)
    if(display.value.length > 10){
        display.style.fontSize = "40px";
    } else {
        display.style.fontSize = "80px";
    }
}