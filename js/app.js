'use strict';

// Week 1 Project: About Me
//
// five yes or no questions about me:
//  1) Am I the middle sibling in my family? (no)
//  2) Do I have an odd number of siblings? (yes)
//  3) Am I married with children? (yes)
//  4) Do I actually have a thick head of hair I just shave off? (no)
//  5) Do I look like Santa Clause in the winter? (yes)
//  6) How many grandkids do I have? (7 for now)
//  7) What Washington cities have I lived in.

//
// Globals
//
var guess = []; // users answers to questions
var questions = [ 'Am I the middle sibling in my family?', // The 5 questions...
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
var myCities = ['Tacoma', 'Gig Harbor', 'Bellevue', 'Kirkland', 'Randle']; //array of cities.
var cityGuess; //guessing the number of cities.


//
userName = getUsersName();
playYesOrNoGame();
guessMyNumber(numberOfGrandKids, guessCountDown);
guessMyCity();
updateTheHtml();
//
// getUsersName
//
function getUsersName() {
  var nameOfUser = prompt('Welcome to my About Tracy game!\n\nWhat\'s your name?');
  if (!confirm('Thanks ' + nameOfUser + '! Ready to play my game?')) {
    alert('OK ' + nameOfUser + '. No hard feelings! (We\'ll play anyway...');
  }
  return nameOfUser;
}

//
// playYesOrNoGame();
//
// This "function" loops through all the questions in the array 'questions' and gathers
// the user's response.
//
function playYesOrNoGame(){
  for (var i = 0; i < questions.length; i++) {
    if (i > 0) {
      guess[i] = prompt(previousQuestionResponse(guess[i-1].toUpperCase().charAt(0) === answers[0][i-1]) + '\n\n' + questions[i]);
    }
    else {
      guess[i] = prompt(questions[i]);
    }
    if ((guess[i].toUpperCase().charAt(0)) === answers[0][i]) {
      score++;
    }
    console.log(questions[i], 'User input:', guess[i], 'Right answer:', answers[1][i],'\n');
  }
  alert(previousQuestionResponse(guess[i-1].toUpperCase().charAt(0) === answers[0][i-1]) + '\n\n' + 'Thank you for playing! ' + userName + '. Ready to play a guessing game?');
}

// This function pics a random right or wrong answer response.
function previousQuestionResponse(theyGotItRight) {
  const right = 0, wrong = 1;
  const responses = [
    ['Nice! You got that one right!', 'Good guess!', 'You must know me pretty well!', 'How did you know that?!','Wow! You\'re a genius!','You Are Amazing!!'],
    ['Uh, no, that\'s not right.', 'Nope. Sorry.', 'We need to talk, serously. ;)','Come on! You can do better than that!','Dude. Seriously?','Oh man. Uh, no.']
  ];

  var i = Math.floor(Math.random()*responses[0].length);
  if (theyGotItRight) {
    console.log('returning RIGHT',responses[right][i],'i',i);
    return responses[right][i];
  } else {
    console.log('returning WRONG',responses[wrong][i],'i',i);
    return responses[wrong][i];
  }
}

//Play the number guessing game: guessMyNumber(numberOfGrandKids, guessCountDown);
//This function uses a global variable called userName.
function guessMyNumber(rightAnswer, numberOfTries){
  var userGuess;
  var previousGuessResponse = '';
  console.log(rightAnswer, numberOfTries);
  do {
    userGuess = parseInt(prompt(previousGuessResponse + 'How many grandkids to I have?'));
    numberOfTries--;
    console.log('Grandkid guess:', userGuess, 'Guesses to go', numberOfTries);
    console.log('typeof input',typeof userGuess);
    if (!isNaN(userGuess)) { //then they entered a number...
      if (userGuess === rightAnswer) {
        alert('That\'s right ' + userName + '! Nicely done.');
        score++;
        break;
      } else if (numberOfTries > 0) {
        previousGuessResponse = 'Close ' + userName + ', but your a bit ' + (userGuess > rightAnswer ? 'high.' : 'low. ') + numberOfTries + (numberOfTries === 1 ? ' guess' : ' guesses') + ' to go!\n\n';
      } else {
        alert('Close ' + userName + ', but your a bit ' + (userGuess > rightAnswer ? 'high.' : 'low. ') + 'And you\'re out of guesses!');
      }
    } else {
      previousGuessResponse = 'Please enter a number as your answer. ' + numberOfTries + (numberOfTries === 1 ? ' guess' : ' guesses') + ' to go!\n\n';
    }
  } while (numberOfTries > 0);
  console.log('done guessing');
}
//
// guessMyCities...
//
// user has 6 tries to guess a city I've lived in...
// The userName is used as global variable.

function guessMyCity(){

  var numTries = 6;
  var correctGuess = false;
  var previousGuessResponse = '';

  console.log('Guessing city...');
  alert('Okay ' + userName + '. Ready to play another guessing game?\n\nIn this one you have six tries to guess a Washington city I\'ve lived in.  Good luck!');

  do {
    cityGuess = prompt(previousGuessResponse + 'Name a city I\'ve lived in:');
    numTries--;
    console.log('City guess', cityGuess, 'guesses remaining', numTries);
    for (var c = 0; c < myCities.length; c++) {
      if (cityGuess.toLowerCase() === myCities[c].toLowerCase()) {
        alert('Great guess ' + userName + '! ' + myCities[c] + ' is a place I\'ve lived!');
        correctGuess = true;
        score++;
        break;
      }
    }
    if (correctGuess === false) {
      previousGuessResponse = 'No, I haven\'t lived in ' + cityGuess + '.\n\n';
      if (numTries >= 1) {
        previousGuessResponse += 'Try again. You have ' + numTries + (numTries > 1 ? ' guesses' : ' guess') + ' remaining.\n\n';
      }
    } else {
      break;
    }
  } while (numTries > 0);
  console.log('Finished cityGuess game, correctGuess flag:',correctGuess);
}
//
// updateTheHtml
//
// This "function" declares a Document object and uses it to insert the user's responses
// into the html.  Based on their score, some friendly trash talk is appended to the
// results list.
//
function updateTheHtml(){
  var elIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'];
  var el = new Document;

  el = document.getElementById('userName'); // Insert user's name
  el.textContent = userName;

  // Fill in results of first five questions.
  for (var j = 0; j < questions.length; j++) {
    el = document.getElementById(elIds[j]);
    el.textContent = questions[j] + ' You answered ' + guess[j] + ', the correct answer was ' + answers[1][j] + '.';
  }

  el = document.getElementById(elIds[5]); //element ID for question 6, number guess
  el.textContent = 'How many grand kids do I have? You guessed ' + (userGuess === numberOfGrandKids ? 'correctly! ' : 'incorrectly.') + ' The answer is ' + numberOfGrandKids + '.';

  // Question 7. Did some googling here to find the insertAdjacentHTML method.
  // I build an unordered list inside element 7 of the ordered list of Q&A's.
  el = document.getElementById(elIds[6]);
  var cityHtmlCode = 'What cities have I lived in? You guessed ' + cityGuess + '. Here\'s a list of places I\'ve lived in Washinton:<ul>';
  for (var c = 0; c < myCities.length; c++) {
    cityHtmlCode += '<li>' + myCities[c] + '</li>';
  }
  cityHtmlCode += '</ul>';
  console.log(cityHtmlCode);
  el.insertAdjacentHTML('afterbegin', cityHtmlCode);

  //Insert score into a <span> element in the HTML
  el = document.getElementById('score');
  el.textContent = score;

  //Add some trash talk relative to user's score...
  el = document.getElementById('comment-on-score');
  if (score === 7) {
    el.textContent = 'A perfect score! You must know me pretty well. Nice job.';
  } else if (score >= 4 && score <= 6) {
    el.textContent = 'Not bad. Better than mere random chance. You pass!';
  } else { // (score <= 3)
    el.textContent = 'Man, that score blows. You need to have a conversation with me sometime soon and get some answers!';
  }
}