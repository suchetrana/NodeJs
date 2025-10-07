
// this -> this always refer to calling site/content
// except one arrow function.

const iphone = {
    name : "iphone 17 pro",
    price : 149000,
    description : "The new apple 17 pro",
    rating : 4.8,
    display : function (){
        console.log(this);
    }
}

const macbook = {
    name : "macbook m5 pro",
    price : 190000,
    description : "The macbook m5 pro",
    rating : 4.9,
    display : () =>{
        console.log(this);
    }
}

iphone.display()
macbook.display()
