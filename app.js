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
var spouse = prompt('Does Sharon have a spouse?');
spouse = spouse.toLowerCase();
if(spouse === 'yes' || spouse === 'y' ) {
  alert('Yep, ' + userName + ' she is married to Steve Miller!');
} else if (spouse === 'no' || spouse === 'n'){
  alert('Sorry, she\'s taken.');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}

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

//question 3 pet
var pet = prompt('Does Sharon have a pet?');
pet = kids.toLowerCase();

if(pet === 'yes' || pet === 'y' ) {
  alert('Your right, ' + userName + ' she has a Pit-Boston Mix named Piper!');
} else if(pet === 'no' || pet === 'n') {
  alert('Actually, Sharon has a Pit- Boston-Mix named Piper.');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}

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

//question 5 hobby
var hobby = prompt('Does Sharon have a hobby?');
hobby = hobby.toLowerCase();

if(hobby === 'yes' || hobby === 'y' ) {
  alert('uhhh, sorry!   ' + userName + ', Sharon has a spouse, a job, a pet and three kids... when would she have time for a hobby???');
} else if (hobby === 'no' || hobby === 'yes') {
  alert('yep- you guessed that one right, who has time for a hobby with a spouse, a job, a pet and three kids! ');
} else {
  alert ('come on ' + userName + ', these are yes or no answers, try again');
}
//* to.LowerCase();
