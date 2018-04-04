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

//
// getUsersName
//
userName = prompt('Welcome to my About Tracy game!\nWhat\\s your name?');
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

//
// updateTheHtml
//
// This "function" declares a Document object and uses it to insert the user's responses
// into the html.  Based on their score, some friendly trash talk is appended to the
// results list.
//
var elIds = ['q1', 'q2', 'q3', 'q4', 'q5'];
var el = new Document;

for (var j = 0; j < questions.length; j++) {
  el = document.getElementById(elIds[j]);
  el.textContent = questions[j] + ' You answered ' + guess[j] + ', the correct answer was ' + answers[1][j] + '.';
}

el = document.getElementById('score');
el.textContent = score;

el = document.getElementById('comment-on-score');
if (score === 5) {
  el.textContent = 'A perfect score! You must know me pretty well. Nice job.';
} else if (score >= 3 && score <= 4) {
  el.textContent = 'Not bad. Better than mere random chance. You pass!';
} else { // (score <= 2)
  el.textContent = 'Man, that score blows. You need to have a conversation with me sometime soon and get some answers!';
}