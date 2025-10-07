let iphone = {
    name : "iphone 17 pro",
    price : 149000,
    description : "The new apple 17 pro",
    rating : 4.8,

    display() {
        console.log("fist display: ", this);
    }
}
let macbook = {
    name : "Macbook m5 pro",
    price : 179000,
    description : "The new m5 pro",
    rating : 4.99,

    display() {
        console.log("second display: ", this);
    }
}

macbook.display();