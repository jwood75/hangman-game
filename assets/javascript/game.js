
	//array of words for user to guess
var hangmanWords = ["andy warhol","pop art","roy lichtenstein", "campbell's soup can","marilyn monroe","minimalism","drowning girl","commercial art",
					   "halftone","comic art", "robert rauschenberg","still life","tom wesselmann",
					   "just what is it that makes today's homes so different, so appealing?","richard hamilton","david hockney","a bigger splash","whaam!",];

	//will choose random word from above array				   
var randomHangmanWords = hangmanWords[Math.floor(Math.random() * hangmanWords.length) ];

var s;
var count = 0;

	//empty array to store answer
var randomAnswer = [];

	//creating blank lines for each letter of random word
function startUp() {

	for (var i = 0; i < randomHangmanWords.length; i++) {

		if (randomHangmanWords[i] === " "){

			randomAnswer[i] = "&nbsp; &nbsp; &nbsp;";
		}

		else if (randomHangmanWords[i] === "?" || randomHangmanWords[i] === "," || randomHangmanWords[i] === "'" || randomHangmanWords[i] === "!"){

			randomAnswer[i] = randomHangmanWords[i];
		}

		else {
			randomAnswer[i] = "_";
		}
	} 

	//will put the blank lines in a string
	s = randomAnswer.join(" ");

	document.getElementById("answer").innerHTML = s;
}

document.onkeyup = function (event) {

	var userGuess = event.key.toLowerCase();

		for (var i = 0; i < randomHangmanWords.length; i++) {

			if (randomHangmanWords[i] === userGuess) {

				randomAnswer[i] = userGuess;
			}
		}
		
	document.getElementById("answer").innerHTML = randomAnswer.join(" ");
}