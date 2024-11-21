/*
    Create a program that starts with a number variable.
    The program will return whether the variable is even or odd.

    Change the variable to test if it works for different cases.
    Print the result as follows: Number 8 is even | Number 9 is odd.

    HINT: The modulus operator ( % ) is your friend.
*/

numberVariable = 2

if (numberVariable % 2 === 0) {
    console.log(`The number ${numberVariable} is even`);
}
if (numberVariable % 2 !== 0) {
    console.log(`The number ${numberVariable} is odd`);
}