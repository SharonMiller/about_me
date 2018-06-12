'use strict';

var userName = prompt('What is your name');

alert ('Hello, ' + userName);

//yes or no question
/*Does have a spouse?
Does Sharon have kids?
Does Sharon have a pet?
Does Sharon have a job?
Does Sharon have a hobby?  */

//question 1 spouse
var spouse = prompt('Does Sharon have a spouse?');
spouse = spouse.toLowerCase();
if(spouse === 'yes' || spouse === 'y' ) {
  alert('Yep, ' + userName + 'she is married to Steve Miller!');
} else {
  alert('sorry she\'s taken.');
}
//question 2 kids
var kids = prompt('Does Sharon have kids?');
kids = kids.toLowerCase();
if(kids === 'yes' || kids === 'y' ) {
  alert('Yep, ' + userName + 'you got it, she has three kids: Gabe, Zach and Ava-Brooklyn!');
} else {
  alert('She has three kids, Gabe, Zach and Ava-Broklyn.');
}
//question 3 pet
var pet = prompt('Does Sharon have a pet?');
pet = kids.toLowerCase();
if(pet === 'yes' || pet === 'y' ) {
  alert('Your right, ' + userName + 'she has a Pit-Boston Mix named Piper!');
} else {
  alert('No- Sharon has a Pit- Boston Mix named Piper.');
}
//question 4 job
var job = prompt('Does Sharon have a pet?');
job = job.toLowerCase();
if(job === 'yes' || job === 'y' ) {
  alert('Your right! ' + userName);
} else {
  alert('Oops, she has a job.');
}

//question 5 hobby
var job = prompt('Does Sharon have a hobby?');
job = job.toLowerCase();
if(job === 'yes' || job === 'y' ) {
  alert('uhhh, sorry! ' + userName + 'Sharon has a spouse, a job, a pet and three kids... when would she have time for a hobby???');
} else {
  alert('yep- you guessed that one! ');
}
//* to.LowerCase();
