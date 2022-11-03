document.querySelector('figure').classList.add('scaffold')
document.querySelector('figure').classList.add('head')
document.querySelector('figure').classList.add('body')
document.querySelector('figure').classList.add('arms')
document.querySelector('figure').classList.add('legs')
const modal = document.getElementById("myModal");
const gameWords = ['zombie', 'vampyr', 'candyman', 'frankenstein','spöke','djävulen','häxa','trollkarl', 'mumie','fågelskrämma'];
let wrongGuesses = []; // Här ska vi lägga i fel-gissade bokstäver
let rightGuess = [];
let rightLetter = []; // NY
let playAgain = document.querySelector(`.reloadbutton`)
let  playAgainModal = document.querySelector(`.modal`)



const timer = document.getElementById('timer');
let timerInterval;

startTinmer = () => {

clearInterval(timerInterval); 
let second = 0, minute = 0;

timerInterval = setInterval(function () {
  timer.innerHTML =
    (minute < 10 ? '0' + minute : minute) +
    ':' +
    (second < 10 ? '0' + second : second);

  second++;

  if (second > 60) {
    
    playAgain.style.visibility = `visible`
    playAgainModal.style.display = "block";
    document.querySelector(`.result`).innerHTML = `Tiden gick ut!`

    clearInterval(timerInterval)
  }
  }, 1000);
}












start = document.querySelector(`.startGame`)
  start.addEventListener(`click`, ()=>{
    onclick= startTinmer();
    start.style.visibility = `hidden`
    gameStart()
  
  });

function gameStart(){

  let randomWord = gameWords[Math.floor(Math.random() * gameWords.length)]; 
  console.log(randomWord);
  let chosenWord = randomWord.split(''); // Splittar 
  for (i =0; i<chosenWord.length; i++){
      rightGuess.push('_');
      
  }
  
  document.getElementById('right-text').innerHTML = `${rightGuess.join(' ')}`
  
  
  addEventListener('keypress', (event) => {
  
    let keyPressed = event.key
    if (rightLetter.includes(keyPressed) || wrongGuesses.includes(keyPressed)) {
      
       } else  {
    let correctGuess = false;
    console.log(keyPressed)
      
    for(i =0; i <chosenWord.length; i++){
      console.log(chosenWord[i]) // skriver ut varje bokstav i ordet 
  
      if(chosenWord[i] === keyPressed){
          console.log(`rätt`)
          correctGuess = true;
          rightLetter.push(chosenWord[i]); // NY
          rightGuess[i] = keyPressed;
          console.log(rightGuess);
  
          document.getElementById('right-text').innerHTML = `${rightGuess.join(' ')}`
  
          
         }    
         if (rightLetter.length === randomWord.length){ 
          document.getElementsByClassName(`result`).innerHTML = `Du vann`
          document.getElementById('right-text').innerHTML = `Du vann!`
          playAgainModal.style.display = "block";
          playAgain.style.visibility = `visible`
          document.querySelector(`.result`).innerHTML = `Du vann!!!!`
          clearInterval(timerInterval)
        }
      
  } 
  
  if (correctGuess === false) {
    console.log('Fel gissning');
    wrongGuesses.push(keyPressed);
    console.log(wrongGuesses)
    document.getElementById('wrong-text').innerHTML = ` Fel bokstav, gissa igen! <br> ${wrongGuesses.join(' ')}`
  }
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
     
      playAgain.style.visibility = `visible`
  
      playAgainModal.style.display = "block";
      document.querySelector(`.result`).innerHTML = `Du förlorade <br> Ordet var: <br> ${chosenWord.join('')}`
     // document.getElementById('right-text').innerHTML = `Ordet var: ${chosenWord.join('')}`
     clearInterval(timerInterval)
  
  
    } 

    
   });

}



 // kunna kryssa ner popup fönstret med krysset
 let close = document.getElementsByClassName("close")[0];
 close.onclick = function() {
  modal.style.display = "none";
}
playAgain.addEventListener(`click`, ()=>{
    location.reload();
})

//NY


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



// Att göra
// 1. 
