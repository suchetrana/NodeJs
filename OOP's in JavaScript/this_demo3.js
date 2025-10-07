const iphone = {
    name : "iphone 17 pro",
    price : 149000,
    description : "The new apple 17 pro",
    rating : 4.8,
    display : function (){

        let iphoneRed = {
            name: "Iphone red",
            price: 111190,
            print : () =>{
                console.log(this);    //  this -> " refer to its lexical scope in arrow function "
            }
        }
        iphoneRed.print()

    }
}

iphone.display()
