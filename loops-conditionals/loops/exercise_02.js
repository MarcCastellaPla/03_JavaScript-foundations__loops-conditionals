/*
    1. Create a for loop that runs from 1 to 100 (one by one).
    2. Every 10 loops, print out: Checkpoint! and the loop number.
    3. On loop 50, print out ONLY: Halfway there!
    4. On the final loop (100), print out ONLY: You made it!
    5. AFTER the loop is done, print out: All done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Halfway there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All done!
*/
for(let index = 0; index <= 100; index++){
    if (index % 10 === 0 && index !== 50 && index !== 100) {
        console.log(`Checkpoint! ${index}`)
    }
    if (index === 50) {
        console.log("Halfway there!")
    }
    if (index === 100) {
        console.log("You made it!")
    }
}
console.log("All done!")