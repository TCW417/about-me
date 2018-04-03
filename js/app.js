'use strict';

/*
 * five yes or no questions about me:
 *  1) Am I the middle sibling in my family? (no)
 *  2) Do I have an odd number of siblings? (yes)
 *  3) Am I married with children? (yes)
 *  4) Do I actually have a thick head of hair I just shave off? (no)
 *  5) Do I look like Santa Clause in the winter? (yes)
 */

var guess = new Array(); // users answers to questions
var questions = [ 'Am I the middle sibling in my family?', 
  'Do I have an odd number of siblings?', 
  'Am I married with children?', 
  'Do I actually have a thick head of hair I just shave off?', 
  'Do I look like Santa Clause in the winter?'
];
var answers = ['N', 'Y', 'Y', 'N', 'Y']; // array holding corresponding answers
var score = 0; //keep score

//
// Ask all the questions and gather answers. Keep score.
//
var i = 0; // all of this code belongs in a loop but we don't know how to do that yet.  ;-)
guess[i] = prompt(questions[i]);
if ((guess[i].toUpperCase().charAt(0)) === answers[i]) {
  score++;
}
console.log(questions[i], 'User input:', guess[i], 'Right answer:', answers[i],'\n');

i++; // 2...
guess[i] = prompt(questions[i]);
if ((guess[i].toUpperCase().charAt(0)) === answers[i]) {
  score++;
}
console.log(questions[i], 'User input:', guess[i], 'Right answer:', answers[i],'\n');

i++; // 3...
guess[i] = prompt(questions[i]);
if ((guess[i].toUpperCase().charAt(0)) === answers[i]) {
  score++;
}
console.log(questions[i], 'User input:', guess[i], 'Right answer:', answers[i],'\n');

i++; // 4...
guess[i] = prompt(questions[i]);
if ((guess[i].toUpperCase().charAt(0)) === answers[i]) {
  score++;
}
console.log(questions[i], 'User input:', guess[i], 'Right answer:', answers[i],'\n');

i++; // 5...
guess[i] = prompt(questions[i]);
if ((guess[i].toUpperCase().charAt(0)) === answers[i]) {
  score++;
}
console.log(questions[i], 'User input:', guess[i], 'Right answer:', answers[i],'\n');

//
// Now use the answers to fill in the html page...
//

var elIds = ['q1', 'q2', 'q3', 'q4', 'q5'];

i = 0;
var el = document.getElementById(elIds[i]);
el.textContent = questions[i] + ' You answered ' + guess[i] + ', the correct answer was ';
if (answers[i] === 'Y') {
  el.textContent += 'Yes.';
} else {
  el.textContent += 'No.';
}

i++;
el = document.getElementById(elIds[i]);
el.textContent = questions[i] + ' You answered ' + guess[i] + ', the correct answer was ';
if (answers[i] === 'Y') {
  el.textContent += 'Yes.';
} else {
  el.textContent += 'No.';
}

i++;
el = document.getElementById(elIds[i]);
el.textContent = questions[i] + ' You answered ' + guess[i] + ', the correct answer was ';
if (answers[i] === 'Y') {
  el.textContent += 'Yes.';
} else {
  el.textContent += 'No.';
}

i++;
el = document.getElementById(elIds[i]);
el.textContent = questions[i] + ' You answered ' + guess[i] + ', the correct answer was ';
if (answers[i] === 'Y') {
  el.textContent += 'Yes.';
} else {
  el.textContent += 'No.';
}

i++;
el = document.getElementById(elIds[i]);
el.textContent = questions[i] + ' You answered ' + guess[i] + ', the correct answer was ';
if (answers[i] === 'Y') {
  el.textContent += 'Yes.';
} else {
  el.textContent += 'No.';
}

//
// Fill in score and fill in final bit of trash talk.
//
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

