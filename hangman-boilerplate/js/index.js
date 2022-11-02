
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 bodyEl = document.querySelector(`body`);
 const gameWords = ['zombie', 'vampire', 'candyman', 'frankenstein','ghost','devil','whitch','sorcerer', 'mumie','scarecrow'];
 let wrongGuesses = []; // Här ska vi lägga i fel-gissade bokstäver
 let rightGuess = [];
 // ändring
 
 
let randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(randomWord);
let chosenWord = randomWord.split(''); 
for (i =0; i<chosenWord.length; i++){
    rightGuess.push('_');
}


addEventListener('keyup', (event) => {
  
  let keyPressed = event.key
  let correctGuess = false;
  console.log(keyPressed)
  
  for(i =0; i <chosenWord.length; i++){
    console.log(chosenWord[i]) // skriver ut varje bokstav i ordet 

    if(chosenWord[i] === keyPressed){
        console.log(`rätt`)
        correctGuess = true;
        rightGuess[i] = keyPressed;
        console.log(rightGuess);
        document.getElementById('right-text').innerHTML = `${rightGuess}` 

    }    
} if (correctGuess === false) {
  console.log('Fel gissning');
  wrongGuesses.push(keyPressed);
  console.log(wrongGuesses)
  document.getElementById('wrong-text').innerHTML = `${wrongGuesses} är fel bokstav!`
}
  if (wrongGuesses.length === 1) {
    document.getElementById('scaffold').style.opacity = '1'
  }
  if (wrongGuesses.length === 2) {
    document.getElementById('head').style.opacity = '1'
  }
  if (wrongGuesses.length === 3) {
    document.getElementById('body').style.opacity = '1'
  }
  if (wrongGuesses.length === 4) {
    document.getElementById('arms').style.opacity = '1'
  }
  if (wrongGuesses.length === 5) {
    document.getElementById('legs').style.opacity = '1'
  }
  if (wrongGuesses.length === 6) {
    alert('Game over!')
  }

 });



/**
 * 1. Splitta ordet till en array med bokstäver
 * 2. Loopa igenom arrayen och jämför med keyPressed
 * 
 * 3. Om bokstav stämmer, visa
 * 4. OM bokstav inte finns, visa fel
 */

 // Array med ord
 
 // random

 //visa tomt ord i webbläsaren i p tagg, 

 // spelarens knapp gissning

 // knapp lyssnare
 //addEventListener. 
 //let playerKey = 
 // spara valet och jämföra

 // Visa om dom passar finns boksatven i ordet?
 // Om den finns, gissa igen och skriv ut bokstav 
 // om den inte finns visa bild 1 osv. 
 // om du gissa rätt ord visa ny sida och spela igen
 // om du blir hängd visa ny sida reload game.  
// hej hej 



