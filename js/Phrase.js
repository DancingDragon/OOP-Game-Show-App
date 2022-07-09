/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {
	 constructor(phrase){
		 this.phrase = phrase.toLowerCase(); 
	 }
	 
	 addPhraseToDisplay() {
		 let phraseHTML = "";
		 //Build the HTML for the phrase
		 for (let l of this.phrase) {
			if (/\s/.test(l)) 
				phraseHTML += `<li class="space"></li>`;
			else
				phraseHTML += `<li class="hide letter ${l}">${l}</li>`;
		 }
		 
		 document.querySelector("div#phrase ul").innerHTML = phraseHTML;
	 }
	 
	 checkLetter(letter) {
		 return this.phrase.includes(letter);
	 }
	 
	 showMatchedLetter(found) {
		 //Show all letters in the phrase that was found
		 for (let node of document.querySelectorAll(`li.letter.${found}`)) {
			node.classList.replace("hide", "show");
		 }
	 }
 }