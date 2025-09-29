'use strict';

function getLet(string, letter) {
    let cout = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            cout++;
        }
    }
    return cout;
}

const btn1 = document.querySelector(".num1_but");

btn1.addEventListener("click", function () {
    let userString1 = prompt("Введіть перше речення:");
    let userString2 = prompt("Введіть друге речення:");
    let userLetter = prompt("Введіть літеру:");

    let cout1 = getLet(userString1, userLetter);
    let cout2 = getLet(userString2, userLetter);

    alert(cout1);
    alert(cout2);

    if (cout1 > cout2) {
        alert("У першому реченні більше літер");
    } else if (cout2 > cout1) {
        alert("У другому реченні більше літер");
    } else {
        alert("Однакова кількість літер");
    }
});
