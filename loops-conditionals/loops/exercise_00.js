/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

// Print even numbers
for(let index = 10; index <= 40; index++){
    if (index % 2 === 0) {
        console.log(`The number ${index} is even`);    
    }
}

// Print odd numbers
for(let index = 10; index <= 40; index++){
    if (index % 2 !== 0) {
        console.log(`The number ${index} is odd`);    
    }
}