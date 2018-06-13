'use strict';

var userName = prompt('What is your name');

alert ('Hello, ' + userName + '!');

//yes or no question
/*Does have a spouse?
Does Sharon have kids?
Does Sharon have a pet?
Does Sharon have a job?
Does Sharon have a hobby?  */

//question 1 spouse
var spouse = prompt('Does Sharon have a spouse?').toLowerCase();
if(spouse === 'yes' || spouse === 'y' ) {
  alert('Yep, ' + userName + ' she is married to Steve Miller!');
} else if (spouse === 'no' || spouse === 'n'){
  alert('Sorry, she\'s taken.');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}
console.log('Does Sharon have a spouse? ' + spouse);

//question 2 kids
var kids = prompt('Does Sharon have kids?');
kids = kids.toLowerCase();
if(kids === 'yes' || kids === 'y' ) {
  alert('Yep, ' + userName + ' you got it, she has three kids: Gabe, Zach and Ava-Brooklyn!');
} else if (kids === 'no' || kids === 'n' ){
  alert('She has three kids, Gabe, Zach and Ava-Brooklyn.');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}
console.log('Does Sharon have kids? ' + kids);

//question 3 pet
var pet = prompt('Does Sharon have a pet?');
pet = pet.toLowerCase();

if(pet === 'yes' || pet === 'y') {
  alert('Your right, ' + userName + ' she has a Pit-Boston Mix named Piper!');
} else if(pet === 'no' || pet === 'n') {
  alert('Actually, Sharon has a Pit- Boston Mix named Piper.');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}
console.log('Does Sharon have a pet? ' + pet);


//question 4 job
var job = prompt('Does Sharon have a job?');
job = job.toLowerCase();

if(job === 'yes' || job === 'y' ) {
  alert('Your right! ' + userName);
} else if(job === 'no' || job === 'n') {
  alert('Oops, she has a job.');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}
console.log('Does Sharon have a job? ' + job);

//question 5 hobby
var hobby = prompt('Does Sharon have a hobby?');
hobby = hobby.toLowerCase();

if(hobby === 'yes' || hobby === 'y' ) {
  alert('uhhh, sorry!   ' + userName + ', Sharon has a spouse, a job, a pet and three kids... when would she have time for a hobby???');
} else if (hobby === 'no' || hobby === 'n') {
  alert('yep- you guessed that one right, who has time for a hobby with a spouse, a job, a pet and three kids! ');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}
console.log('Does Sharon have a hobby? ' + hobby);
// guess the number question- how many times have i moved? answer 32
var moveGuess = prompt('how many times have I moved');
var numGuess;

for (numGuess = 0; numGuess < 3; numGuess++ ) {
  console.log(numGuess + ' my counting guess - top of for loop');
  console.log(moveGuess + ' I input this - top of for loop');
  if (moveGuess > 32) {
    console.log('greater than 32');
    alert('Oops, that is too high'); //guess too high
    moveGuess = prompt('try again');
    console.log(moveGuess);
  } else if (moveGuess < 32) {
    console.log('less than 32');
    alert('Oops, that is too low');
    moveGuess = prompt ('try again');
  } else if (moveGuess == 32) {
    console.log('equal to 32');
    alert('Nice job, you guessed it');
    break;
  }
  if (numGuess === 2 ) {
    alert('You are all out of guesses.');
  }
  console.log(numGuess + ' x\'s through loop');
}
//6th question that takes numeric input by prompting a user to guess a number ie what is my favorite number.  indicate to the user whether the guess is too high or too low and give the user exactly four oportunities to get the correct answer.
// 7th question- multiple possible cirrect answers that are stored in an array. ie can you guess a state that I have lived in besids washington. the user has 6 tries to get a single correct answer and uon those tries or getting the correct answer displays a message to the user indicating all of the possible correct answers
//as a developer I want to keep a tally of the total number of correct answers given by the user and at the end of the game tell the user how well they did with a personalized custom messagesay username you got 4 out of 7 questions correct, better luch next time"

//make one a do while question ie 

//* to.LowerCase();
