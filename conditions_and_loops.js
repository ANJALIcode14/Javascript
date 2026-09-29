// let a = 5, b = 6;

// if( a === 5){
//     console.log("a is 5");
// }

// let age = parseInt(prompt("Enter your age"));


// if(age < 18){
//     console.log("Not eligible");
// }

// if( age > 18){
//     console.log("Eligible ");
// }

let age = parseInt(prompt("Enter your age : "));
if (age < 18){
    console.log("Junior");
}else if (age >= 60){
    console.log("Senior");
}
else{
    console.log("Middle");
}

if(age === 0) console.log("Enter a valid age");