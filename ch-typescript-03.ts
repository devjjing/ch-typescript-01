const numbers = [12, 5, 2, 4, 5, 3, 10, 8, 2, 2, 4, 13, 7, 4];

function printDoubleNum(arr: number[]): void {
    const doubleNum = arr.map((num) => num * 2);
    doubleNum.forEach((value) => console.log(value));
}

printDoubleNum(numbers);

function printSum(arr: number[]): void {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
}

printSum(numbers);

function printTen(arr: number[]): void {
    const tenPlus = arr.some((num: number) => {
        return num > 10;
    });
    console.log(tenPlus);
}

printTen(numbers);


const carBrand = [
    "Volvo",
    "Volkswagen",
    "Kia",
    "Nissan",
    "Audi",
    "Mercedes-Benz",
    "Ford",
    "BMW"
];


function printLongNames(arr: string[]): void {
    const brands = arr.filter((str) => str.length > 5);
    brands.forEach((value) => console.log(value));
}

printLongNames(carBrand);