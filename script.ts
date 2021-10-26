interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];

function findNameOfTallestMountain(array: Mountain[]): string {

    let tallestName: string = '';
    let tallestHeight: number = 0;

    for (let mountain of array) {
        if (mountain.height > tallestHeight) {
            tallestName = mountain.name;
            tallestHeight = mountain.height;
        }
    }

    return tallestName;
}

const tallestMountainName: string = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);

interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: 'taco', price: 1.99 },
    { name: 'burrito', price: 4.49 },
    { name: 'chips and salsa', price: 2.99 },
    { name: 'cerveza', price: 1.99 },
    { name: 'margarita', price: 3.99 }
];

function calcAverageProductPrice(array: Product[]) {

    if (array.length === 0) {
        return 0;
    }

    let totalPrice: number = 0;

    for (let product of array) {
        totalPrice += product.price;
    }

    const averagePrice = (totalPrice / array.length).toFixed(2);
    return averagePrice;

}

const averageProductPrice = calcAverageProductPrice(products);
console.log(averageProductPrice);

interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
];

function calcInventoryValue(array: InventoryItem[]) {

    let totalValue: number = 0.00;

    for (let item of array) {
        totalValue += item.product.price * item.quantity;
    }

    return totalValue.toFixed(2);

}

const inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);