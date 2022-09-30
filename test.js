function generateRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var a=10
var b=20
var c=generateRandomNumberBetween(a,b);
console.log(c);