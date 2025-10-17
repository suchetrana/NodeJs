console.log(Object.prototype)

function Product(name, age) {
    this.name = name;
    this.age = age;
}
const iphone = new Product("Iphone 18 pro", 170000);


console.log(iphone);
Product.prototype.display = function () {
    console.log("details of product : ", this);
}

console.log(iphone.display());
// console.log(iphone.toString());

