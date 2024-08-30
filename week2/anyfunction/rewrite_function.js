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
//any -> kiem tra xem co phan tu nao theo dieu kien khong -> true/false
let hasAny = arr.some((value, index) => value > 10);
console.log(hasAny); // true
//some -> kiem tra xem it nhat mot phan tu theo dieu kien -> true/false
let all = arr.some((value, index) => value > 10);
console.log(all); // true
//flatmap -> lam phang mang va tao ra mang moi tu mang cu
let arr6 = arr4.flatMap((value, index) => value.map((v, i) => v + 1));
console.log(arr6); // [2, 3, 4, 5, 6, 7]
//every -> kiem tra xem tat ca phan tu theo dieu kien -> true/false
let all2 = arr.every((value, index) => value > 10);
console.log(all2); // false