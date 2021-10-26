"use strict";
const mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(array) {
    let tallestName = '';
    let tallestHeight = 0;
    for (let mountain of array) {
        if (mountain.height > tallestHeight) {
            tallestName = mountain.name;
            tallestHeight = mountain.height;
        }
    }
    return tallestName;
}
const tallestMountainName = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);
const products = [
    { name: 'taco', price: 1.99 },
    { name: 'burrito', price: 4.49 },
    { name: 'chips and salsa', price: 2.99 },
    { name: 'cerveza', price: 1.99 },
    { name: 'margarita', price: 3.99 }
];
function calcAverageProductPrice(array) {
    if (array.length === 0) {
        return 0;
    }
    let totalPrice = 0;
    for (let product of array) {
        totalPrice += product.price;
    }
    const averagePrice = (totalPrice / array.length).toFixed(2);
    return averagePrice;
}
const averageProductPrice = calcAverageProductPrice(products);
console.log(averageProductPrice);
const inventory = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(array) {
    let totalValue = 0.00;
    for (let item of array) {
        totalValue += item.product.price * item.quantity;
    }
    return totalValue.toFixed(2);
}
const inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
