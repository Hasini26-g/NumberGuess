const input = document.getElementById("inputg");
const button = document.getElementById("butt");
let secretNum = Math.floor(Math.random() * 50) +1;
const message = document.getElementById("message");

//math.random()----> generates a number between 0 to 1 in decimal
// math.floor()----> removes the extra decimal part
// +1 because we're generating a random number between 1-100

function checkguess(){
    let guess = Number(input.value);
    if (guess == secretNum){
        message.textContent = "Correct!";
    }
    else if (guess>secretNum){
        message.textContent = "Close...Think of a lower number";
    }
    else{
        message.textContent="Close...Think of a Higher number";
    }
}
button.addEventListener("click", function(){
    checkguess();
});
input.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        checkguess();
    }
});
