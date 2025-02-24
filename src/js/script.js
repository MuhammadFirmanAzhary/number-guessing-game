// Initialize random number and attempt limit
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

// Function to check player's guess
function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsLeft = document.getElementById("attemptsLeft");

    // Validate input (must be a number between 1-100)
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        return;
    }

    // Check if the guess is correct or not
    if (guess === randomNumber) {
        message.innerHTML = `🎉 Congratulations! You guessed it right, the number is ${randomNumber}!`;
        message.style.color = "lime";
        disableInput();
    } else {
        attempts--; // Decrease remaining attempts
        if (attempts > 0) {
            message.textContent = guess > randomNumber ? "Your guess is too high!" : "Your guess is too low!";
            message.style.color = "yellow";
            attemptsLeft.textContent = `Attempts left: ${attempts}`;
        } else {
            message.innerHTML = `💀 Game Over! The correct number was ${randomNumber}.`;
            message.style.color = "red";
            disableInput();
        }
    }
}

// Function to disable input after win/lose
function disableInput() {
    document.getElementById("guessInput").disabled = true;
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    document.getElementById("message").textContent = "";
    document.getElementById("attemptsLeft").textContent = "Attempts left: 5";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
}
