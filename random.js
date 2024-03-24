let max = prompt("Enter any number");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess The number");

while (true) {
    if (guess == "quit") {
        console.log("Quitting the Game...!");
        break;
    }

    if (guess == random) {
        console.log("You are Right,Congrats...!");
        break;
    } else {

        guess = prompt("You are wrong , Guess Again");
    }

    if (guess < random) {
        guess = prompt("Please enter large number");
    } else if (guess > random) {
        guess = prompt("Please enter small number");
    }
};