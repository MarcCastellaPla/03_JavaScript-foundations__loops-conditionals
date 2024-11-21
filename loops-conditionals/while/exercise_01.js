/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

// print out all the even numbers between 10 and 40.
let indexEvenNumber = 10;
while(indexEvenNumber <= 40) {

    if (indexEvenNumber % 2 === 0) {
        console.log(indexEvenNumber);
    }

    indexEvenNumber++;
}
// print out all the odd numbers between 10 and 40.
let indexOddNumber = 10;
while(indexOddNumber <= 40) {

    if (indexOddNumber % 2 !== 0) {
        console.log(indexOddNumber);
    }

    indexOddNumber++;
}