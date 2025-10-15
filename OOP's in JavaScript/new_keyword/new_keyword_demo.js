class Product{
    #name;   // private access modifier #variableName
    price;
    description;

    constructor(n, p, d) {
        this.#name = n;
        this.price = p;
        this.description = d;

        // return 10;  not return
        // return {};  constructor always return object
    }

    display() {
    //     print object
    }
    
//     getters and setters
    set price(n){
        this.price = n;
    }
    get price(){
        return this.price;
    }
}

const p = new Product("bag", 10000, "cool nike bag");
console.log(p);
p.price = 200;

console.log(p);
