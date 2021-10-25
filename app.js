const inputField = document.getElementById("input");
const checkButton = document.getElementById("check");
const resultField = document.getElementById("result");
const sayibtn = document.querySelector('.sayi__buton')
const attemptsField = document.getElementById("attempts");
const randomQuess = Math.floor(Math.random() * 100) + 1;
console.log(randomQuess);
let guess = 0;

checkButton.addEventListener("click", () => {
	let inputValue = parseInt(inputField.value);
	let newguess = guess;
	console.log(typeof inputValue);

	if (isNaN(inputValue) || inputValue > 100 || inputValue < 1) {
		
		resultField.innerText = ` Your guess was invalid value. Try Again!!`
		attemptsField.innerText = `${guess}. guessing.`
		guess = guess + 1;
		document.getElementById('input').value = ''

	}else if(inputValue === randomQuess) {
		guess = guess + 1;
		resultField.innerText = `Graduliation, correct ${inputValue} Answer!!!! Let\'s go again...`
		attemptsField.innerText = `Graduliation ${guess}. guessing.`
		document.getElementById('input').value = ''
		checkButton.style.display = 'none';
		const refreshButton = document.createElement('button');
		refreshButton.innerHTML = 'Play Again!!';
		refreshButton.classList.add('refresh');
		refreshButton.addEventListener('click', () => {
			location.reload();
		});
		sayibtn.appendChild(refreshButton);

	}else if (inputValue > randomQuess) {
		guess = guess + 1;
		resultField.innerText = ` Your guess was ${inputValue} That's too high. Try Again!!`
		attemptsField.innerText = `${guess}. guessing.`
		document.getElementById('input').value = ''
		return newguess;

	}else if (inputValue < randomQuess) {
		guess = guess + 1;
		resultField.innerText = ` Your guess was ${inputValue} That's too low. Try Again!!`
		attemptsField.innerText = `${guess}. guessing.`
		document.getElementById('input').value = ''
		return newguess;
	}
});

function guessRandom(randomQuess) {
	return (randomQuess > 0 && randomQuess < 101);
}
