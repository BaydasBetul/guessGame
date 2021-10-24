function guessRandom(randomQuess) {
	return (randomQuess > 0 && randomQuess < 101);
}

const inputField = document.getElementById("input");
const checkButton = document.getElementById("check");
const resultField = document.getElementById("result");
const attemptsField = document.getElementById("attempts")
let guess = 0;
const randomQuess = Math.floor(Math.random() * 100) + 1;

console.log(randomQuess);

checkButton.addEventListener("click", () => {

	let inputValue = parseInt(inputField.value)

	let newguess = guess;

	if (inputValue === randomQuess) {
		guess = guess + 1;
		resultField.innerText = `Graduliation, correct ${inputValue} Answer!!!! Let\'s go again...`
		attemptsField.innerText = `Graduliation ${guess}. guessing.`
		document.getElementById('input').value = '';
		return window.location.reload()

	} else if (inputValue > randomQuess) {
		guess = guess + 1;
		resultField.innerText = ` Your guess was ${inputValue} That's too high. Try Again!!`
		attemptsField.innerText = `${guess}. guessing.`
		document.getElementById('input').value = '';
		return newguess;
	} else if (inputValue < randomQuess) {
		guess = guess + 1;
		resultField.innerText = ` Your guess was ${inputValue} That's too low. Try Again!!`
		attemptsField.innerText = `${guess}. guessing.`
		document.getElementById('input').value = '';
		return newguess;
	}
});