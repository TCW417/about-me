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

var i = 0; // all of this code belongs in a loop but we don't know how to do that yet.  ;-)
if ((guess[i] = prompt(questions[i]).toUpperCase().charAt(0)) === answers[i]) {
  alert('That\'s right!');
} else {
  alert('Ooh, sorry. That\'s not right');
}
console.log(questions[i], 'User input:', guess[i], 'Right anwser:', answers[i],'\n');
i++;
if ((guess[i] = prompt(questions[i]).toUpperCase().charAt(0)) === answers[i]) {
  alert('That\'s right!');
} else {
  alert('Ooh, sorry. That\'s not right');
}
console.log(questions[i], 'User input:', guess[i], 'Right anwser:', answers[i],'\n');
i++;
if ((guess[i] = prompt(questions[i]).toUpperCase().charAt(0)) === answers[i]) {
  alert('That\'s right!');
} else {
  alert('Ooh, sorry. That\'s not right');
}
console.log(questions[i], 'User input:', guess[i], 'Right anwser:', answers[i],'\n');
i++;
if ((guess[i] = prompt(questions[i]).toUpperCase().charAt(0)) === answers[i]) {
  alert('That\'s right!');
} else {
  alert('Ooh, sorry. That\'s not right');
}
console.log(questions[i], 'User input:', guess[i], 'Right anwser:', answers[i],'\n');
i++;
if ((guess[i] = prompt(questions[i]).toUpperCase().charAt(0)) === answers[i]) {
  alert('That\'s right!');
} else {
  alert('Ooh, sorry. That\'s not right');
}
console.log(questions[i], 'User input:', guess[i], 'Right anwser:', answers[i],'\n');
i++;
