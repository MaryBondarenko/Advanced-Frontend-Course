const priseCarrot = 15.678,
  priseChicken = 123.965,
  prisePich = 90.2345;
document.writeln("<p>Ціна морквинки = "+priseCarrot + " " +"UAH</p>");
document.writeln("<p>Ціна курки = "+priseChicken + " " +"UAH</p>");
document.writeln("<p>Ціна персика = "+prisePich + " " + "UAH</p>");
console.log(priseCarrot);
console.log(priseChicken);
console.log(prisePich);


let priseMin = Math.min(priseCarrot, priseChicken, prisePich);
let priseMax = Math.max(priseCarrot, priseChicken, prisePich);
document.writeln("<p>Мінімальна ціна = "+priseMin + " " + "UAH</p>");
document.writeln("<p>Максимальна ціна = "+priseMax +" " + "UAH</p>");
console.log(priseMin);
console.log(priseMax);

let priseItemsTotal = priseCarrot + priseChicken + prisePich;
document.writeln("<p>Сума всіх продуктів = "+priseItemsTotal + " " + "UAH</p>");
console.log(priseItemsTotal);

let priseCarrotRoundFloor = Math.floor(priseCarrot),
  priseChickenRoundFloor = Math.floor(priseChicken),
  prisePichRoundFloor = Math.floor(prisePich);
let priseItemsRoundFloor = priseCarrotRoundFloor + priseChickenRoundFloor + prisePichRoundFloor;
document.writeln("<p>Округлена сума продуктів в меншу сторону = "+priseItemsRoundFloor + " " + "UAH</p>");
console.log(priseItemsRoundFloor);

console.log(Math.round(priseItemsRoundFloor / 100) * 100);
document.writeln("<p>Сума товарів округлена до сотень = "+Math.round(priseItemsRoundFloor / 100) * 100 + " " + "UAH</p>");

let booleanValue = Math.floor(priseItemsTotal) % 2 == 0;
console.log(booleanValue);
document.writeln('<p>Парне true , непарне false = ' + booleanValue + "</p>");

let clientMoney = 500;
let totalReshta = priseItemsTotal - clientMoney;
console.log(totalReshta);
document.writeln("<p>Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн. = "+totalReshta +  " " + "UAH</p>");

let priseItemsAverage = (priseCarrot + priseChicken + prisePich) / 3;
console.log(Number(priseItemsAverage.toFixed(2)));
document.writeln("<p>Середнє значення цін, округлене до другого знаку після коми  = "+(Number(priseItemsAverage.toFixed(2))) +  " " + "UAH</p>");

let randomSale = Math.random();
console.log(Number(randomSale.toFixed(2))*100);
document.writeln("<p>Випадкова знижка  = "+(Number(randomSale.toFixed(2))*100) +  " " + "%</p>");

let randomSalePriseItemsTotal = priseItemsTotal -(priseItemsTotal * randomSale);
console.log(Number(randomSalePriseItemsTotal.toFixed(2)));
document.writeln("<p>Сума випадкової знижки  = "+(Number(randomSalePriseItemsTotal.toFixed(2))) +  " " + "UAH</p>");

let profitAfterSale = (priseItemsTotal/2) - (priseItemsTotal * randomSale);
document.writeln("<p>Чистий прибуток після знижки = "+(Number(profitAfterSale.toFixed())) +  " " + "UAH</p>");
console.log(Number(profitAfterSale.toFixed()));