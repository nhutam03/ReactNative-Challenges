//map -> tao ra 1 mang moi tu mang cu
let arr = [3, 11, 2003]
let arr2 = arr.map((value, index) => value + 1);
console.log(arr2); // [4, 12, 2004]
//filter -> loc ra cac phan tu theo dieu kien
let arr3 = arr.filter((value, index) => value > 10);
console.log(arr3); // [11, 2003]
//reduce -> tinh toan gia tri cuoi cung cua mang
let sum = arr.reduce((acc, value) => acc + value, 0);
console.log(sum); // 2017
//find -> tim ra phan tu dau tien theo dieu kien
let first = arr.find((value, index) => value > 10);
console.log(first); // 11
//flat -> lam phang mang
let arr4 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let arr5 = arr4.flat();
console.log(arr5); // [1, 2, 3, 4, 5, 6]