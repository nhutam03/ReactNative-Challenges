//map -> tao ra 1 mang moi tu mang cu
let arr = [3, 11, 2003]
Array.prototype.mapfn = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i));
    }
    return newArr;
}
let arr2 = arr.mapfn((value, index) => value + 1);
console.log(arr2); // [4, 12, 2004]
//filter -> loc ra cac phan tu theo dieu kien
Array.prototype.filterfn = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}
let arr3 = arr.filterfn((value, index) => value > 10);
console.log(arr3); // [11, 2003]
//find -> tim ra phan tu dau tien theo dieu kien
Array.prototype.findfn = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            return this[i];
        }
    }
}
let arr4 = arr.findfn((value, index) => value > 10);
console.log(arr4); // 11
// //flatmap -> lam phang mang va tao ra mang moi tu mang cu
Array.prototype.flatmapfn = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i));
    }
    return newArr.flat();
}
let arr5 = arr.flatmapfn((value, index) => [value, value + 1]);
console.log(arr5); // [3, 4, 11, 12, 2003, 2004]
//every -> kiem tra xem tat ca phan tu theo dieu kien -> true/false
Array.prototype.everyfn = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i)) {
            return false;
        }
    }
    return true;
}
let arr6 = arr.everyfn((value, index) => value > 10);
console.log(arr6); // false
//some -> kiem tra xem co phan tu nao theo dieu kien -> true/false
Array.prototype.somefn = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            return true;
        }
    }
    return false;
}
let arr7 = arr.somefn((value, index) => value > 10);
console.log(arr7); // true
//reduce -> tinh toan gia tri cuoi cung dua tren tat ca phan tu
Array.prototype.reducefn = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i);
    }
    return accumulator;
}
let arr8 = arr.reducefn((accumulator, value, index) => accumulator + value, 0);
console.log(arr8); // 2017