// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','https://media.discordapp.net/attachments/796465047667736616/1106297759654498424/1683832333878.jpg');
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hello, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
