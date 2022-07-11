let btn = document.getElementById('btn');
let output = document.getElementById('outputText');

let guessedNumber = [Math.floor(Math.random() * 100)];

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput');
    if(input === guessedNumber){
        output.innerHTML = `Great! you guessed right, ${guessedNumber}`;
        input.value = '';
    } else if(input < guessedNumber){
        output.innerHTML = `Your guess is low! Try again!`;
        input.value = '';
    };
     if(input > guessedNumber){
        output.innerHTML = `Your guess is too high! Try again!`
    }
    input.value = '';
});