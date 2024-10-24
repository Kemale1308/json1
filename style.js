

let counter = 1; 
let fontSize = 40; 


function updateCounter() {
    document.querySelector(".counter").innerText = counter;
}


function increaseByOne() {
    counter++;
    updateCounter();
}


function decreaseByOne() {
    counter--;
    updateCounter();
}


function increaseByFive() {
    counter += 5;
    updateCounter();
}


function decreaseByFive() {
    counter -= 5;
    updateCounter();
}


function changeColor() {
    const colors = ["red", "green", "blue", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".counter").style.color = randomColor;
}


function decreaseFontSize() {
    fontSize = fontSize - 5; 
    document.querySelector(".counter").style.fontSize = fontSize + "px";
}


function increaseFontSize() {
    fontSize = fontSize + 5; 
    document.querySelector(".counter").style.fontSize = fontSize + "px";
}


document.querySelector(".increaseByOne").addEventListener("click", increaseByOne);
document.querySelector(".decreaseByOne").addEventListener("click", decreaseByOne);
document.querySelector(".increaseByFive").addEventListener("click", increaseByFive);
document.querySelector(".decreaseByFive").addEventListener("click", decreaseByFive);
document.querySelector(".changeColor").addEventListener("click", changeColor);
document.querySelector(".decreaseFontSize").addEventListener("click", decreaseFontSize);
document.querySelector(".increaseFontSize").addEventListener("click", increaseFontSize);
