'use strict';


function formatPhone(phone) {

    phone = phone.trim();

    
    if (/^80\d{9}$/.test(phone)) {
        let code = "0" + phone.slice(2, 4); 
        let part1 = phone.slice(4, 7);
        let part2 = phone.slice(7, 9);
        let part3 = phone.slice(9);
        return `+38 (${code}) ${part1}-${part2}-${part3}`;
    }

   
    if (/^0\d{9}$/.test(phone)) {
        let code = phone.slice(0, 3); 
        let part1 = phone.slice(3, 6);
        let part2 = phone.slice(6, 8);
        let part3 = phone.slice(8);
        return `+38 (${code}) ${part1}-${part2}-${part3}`;
    }

    return "Неправильний формат номера!";
}



const btn2 = document.querySelector(".num2_but");

btn2.addEventListener("click", function () {
    let userPhone = prompt("Введіть номер телефону:");
alert(formatPhone(userPhone));
});
