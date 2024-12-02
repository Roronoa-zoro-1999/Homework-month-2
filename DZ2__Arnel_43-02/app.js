// задача1
let number1 = prompt("write first number");
let number2 = prompt("write second number");
if (number1>number2) {
    console.log(number1+" > "+number2);
}else if (number1<number2) {
    console.log(number1+" < "+number2);
}else  {
    console.log(number1+" = "+number2);
}



// задание2
let planet = prompt("choose number for 1 to 9");
switch (Number(planet)) {
    case 1:console.log("меркурий");break;
    case 2:console.log("венера");break;
    case 3:console.log("земля");break;
    case 4:console.log("марс");break;
    case 5:console.log("юпитер");break;
    case 6:console.log("сатурн");break;
    case 7:console.log("уран");break;
    case 8:console.log("нептун");break;
    case 9:console.log("плутон");break;
    default :console.log("я не знаю");break;
}



// здача3
let restoraunt = {
    name: "Baratie", // название ресторана

    averageAill: 100000, // средний чек

    cooksName: "Zeff red leg", // имя шеф-повара

    workAtNight: true, // работает ночью

    stars: 5, // количество звезд

    address: "Sambas " // адрес ресторана
}
