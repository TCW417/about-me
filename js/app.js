'use strict';

/*
 * five yes or no questions about me:
 *  1) Am I the middle sibling in my family? (no)
 *  2) Do I have an odd number of siblings? (yes)
 *  3) Am I married with children? (yes)
 *  4) Do I actually have a thick head of hair I just shave off? (no)
 *  5) Do I look like Santa Clause in the winter? (yes)
 */

//
// Globals
//
var guess = new Array(); // users answers to questions
var questions = [ 'Am I the middle sibling in my family?', // The questions...
  'Do I have an odd number of siblings?',
  'Am I married with children?',
  'Do I actually have a thick head of hair I just shave off?',
  'Do I look like Santa Clause in the winter?'
];
//
// two dimensional array holding corresponding answers.
// Test-for value row 0, reply-with value in row 1
//
var answers = [
  ['N', 'Y', 'Y', 'N', 'Y'],
  ['no', 'yes', 'yes', 'no', 'yes']
];
var score = 0; //keep score
var userName; // user's name
var numberOfGrandKids = 7; // the number to guess
var guessCountDown = 4; // number of tries to guess it
var userGuess; // user's guess at the number

//
// getUsersName
//
userName = prompt('Welcome to my About Tracy game!\n\nWhat\'s your name?');
if (!confirm('Thanks ' + userName + '! Ready to play my game?')) {
  alert('OK ' + userName + '. No hard feelings! (We\'ll play anyway...');
  // this is where I'd like to abort the script...
}

//
// askTheQuestions
//
// This "function" loops through all the questions in the array 'questions' and gathers
// the user's response.
//
for (var i = 0; i < questions.length; i++) {
  guess[i] = prompt(questions[i]);
  if ((guess[i].toUpperCase().charAt(0)) === answers[0][i]) {
    score++;
  }
  console.log(questions[i], 'User input:', guess[i], 'Right answer:', answers[1][i],'\n');
}
alert('Nicely done ' + userName + '. Ready to play a guessing game?');


//Play the number guessing game

console.log('grandKidCountdown',guessCountDown);
do {
  userGuess = parseInt(prompt('How many grandkids to I have?'));
  guessCountDown--;
  console.log('Grandkid guess:', userGuess, 'Guesses to go', guessCountDown);
  console.log('typeof input',typeof userGuess);
  if (!isNaN(userGuess)) { //then they entered a number...
    if (userGuess === numberOfGrandKids) {
      alert('That\'s right ' + userName + '! Nicely done.');
      score++;
      break;
    } else if (guessCountDown > 0) {
      alert('Close ' + userName + ', but your a bit ' + (userGuess > numberOfGrandKids ? 'high.' : 'low. ' + guessCountDown + (guessCountDown === 1 ? ' guess' : ' guesses') + ' to go!'));
    } else {
      alert('Close ' + userName + ', but your a bit ' + (userGuess > numberOfGrandKids ? 'high.' : 'low. ') + 'And you\'re out of guesses!');
    }
  } else {
    alert('Please enter a number as your answer. ' + guessCountDown + (guessCountDown === 1 ? ' guess' : ' guesses') + ' to go!');
  }
} while (guessCountDown > 0);
console.log('done guessing');

//
// guessMyCities...
//
// user has 6 tries to guess a city I've lived in...
//
var myCities = ['Tacoma', 'Gig Harbor', 'Bellevue', 'Kirkland', 'Randle'];
var numTries = 6;
var cityGuess;
var correctGuess = false;

alert('Okay ' + userName + '. Ready to play another guessing game?\n\nIn this one you have six tries to guess a Washington city I\'ve lived in.  Good luck!');

do {
  cityGuess = prompt('Name a city I\'ve lived in:');
  numTries--;
  console.log('City guess', cityGuess);
  for (var c = 0; c < myCities.length; c++) {
    if (cityGuess.toLowerCase() === myCities[c].toLowerCase()) {
      alert('Gread guess ' + userName + '! ' + myCities[c] + ' is a place I\'ve lived!');
      correctGuess = true;
      score++;
      break;
    }
  }
  if (correctGuess === false) {
    var alertString = 'No, I haven\'t lived in ' + cityGuess + '. ';
    if (numTries >= 1) {
      alertString += 'Try again. You have ' + numTries + (numTries > 1 ? ' guesses' : ' guess') + ' remaining.';
    }
    alert(alertString);
  } else {
    break;
  }
} while (numTries > 0);
console.log('Finished cityGuess game, correctGuess flag:',correctGuess);
//
// updateTheHtml
//
// This "function" declares a Document object and uses it to insert the user's responses
// into the html.  Based on their score, some friendly trash talk is appended to the
// results list.
//
var elIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];
var el = new Document;

el = document.getElementById('userName'); // Insert user's name
el.textContent = userName;

for (var j = 0; j < questions.length; j++) {
  el = document.getElementById(elIds[j]);
  el.textContent = questions[j] + ' You answered ' + guess[j] + ', the correct answer was ' + answers[1][j] + '.';
}

el = document.getElementById(elIds[5]); //element ID for question 6, number guess
el.textContent = 'How many grand kids do I have? You guessed ' + (userGuess === numberOfGrandKids ? 'correctly! ' : 'incorrectly.') + ' The answer is ' + numberOfGrandKids + '.';

el = document.getElementById(elIds[6]); //element ID for question 7, City guess
var cityHtmlCode = 'What cities have I lived in? You guessed ' + cityGuess + '. Here\'s a list of places I\'ve lived in Washinton:<ul>';
for (c = 0; c < myCities.length; c++) {
  cityHtmlCode += '<li>' + myCities[c] + '</li>';
}
cityHtmlCode += '</ul>';
console.log(cityHtmlCode);
el.insertAdjacentHTML('afterbegin', cityHtmlCode);

el = document.getElementById('score');
el.textContent = score;

el = document.getElementById('comment-on-score');
if (score === 7) {
  el.textContent = 'A perfect score! You must know me pretty well. Nice job.';
} else if (score >= 4 && score <= 6) {
  el.textContent = 'Not bad. Better than mere random chance. You pass!';
} else { // (score <= 3)
  el.textContent = 'Man, that score blows. You need to have a conversation with me sometime soon and get some answers!';
}