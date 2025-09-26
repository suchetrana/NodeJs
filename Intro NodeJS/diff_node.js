const x = setTimeout(function exec(){
    console.log("Timer completed"); 
}, 1000);
console.log(x);

clearInterval(x);