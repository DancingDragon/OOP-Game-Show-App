/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
	constructor() {
		//Initialize variables used int the game.
		this.missed = 0;
		this.phrases = [new Phrase("on the table"),
			new Phrase("by the book"), 
			new Phrase("for a while"),
			new Phrase("owls in the moss"), 
			new Phrase("welcome home")];
		this.activePhrase = null;
		this.playing = true;
	}
	 
	startGame() {
		//Hide the overlay
		document.getElementById("overlay").style.display = "none";
		//Display a random phrase
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
	 
	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random()*this.phrases.length)]
	}
	 
	handleInteraction(el) {
		//Disable the responsible button element
		el.disabled = true;
		
		//Check if the phrase contains the letter
		let letter = el.textContent;
		if (this.activePhrase.checkLetter(letter)) {
			el.classList.add("chosen");
			this.activePhrase.showMatchedLetter(letter);
			//end game if player won
			if (this.checkForWin()) {
				this.gameOver(true);
			}
		} else {
			el.classList.add("wrong");
			this.removeLife();
		}
	}
	 
	removeLife() {
		//select the first heart that hasnt already been used
		let life = document.querySelector("li.tries img[alt='Heart Icon']");
		life.src = "./images/lostHeart.png";
		life.alt = "Used Heart Icon";
		 
		//increment 'missed' and then check if all lives are lost.
		if (++this.missed >= 5) {
			this.gameOver(false);
		}
	}
	 
	checkForWin() {
		return (document.querySelector("li.hide.letter")==null);
	}
	 
	gameOver(win) {
		//select and show the overlay
		let overlay = document.getElementById("overlay");
		overlay.style.display = "flex";
		//Select and set the gameovermessage
		let gameOverMessage = overlay.querySelector("#game-over-message");
		if (win) {
			gameOverMessage.innerHTML = "Winner winner chicken dinner!";
			overlay.className = "win";
		} else {
			gameOverMessage.innerHTML = "Better luck next time";
			overlay.className = "lose";
		}
		
		//reset the hearts
		let lives = document.querySelectorAll("li.tries img[alt='Used Heart Icon']");
		for (let life of lives) {
			life.src = "./images/liveHeart.png";
			life.alt = "Heart Icon";
		}
		//reset the buttons
		for (let btn of document.querySelectorAll("div#qwerty button")) {
			btn.className="key";
			btn.disabled = false;
		}
		this.playing = false;
	}
}