'use strict';

var userName = prompt('What is your name');

alert ('Hello, ' + userName + '!');

//yes or no question
/*Does have a spouse?
Does Sharon have kids?
Does Sharon have a pet?
Does Sharon have a job?
Does Sharon have a hobby?  */

// question 1 spouse

function questionOne (){
  var husbandBool = true;
  do{
    var spouse = prompt('Does Sharon have a spouse?').toLowerCase();
    if(spouse === 'yes' || spouse === 'y' ) {
      alert('Yep, ' + userName + ' she is married to Steve Miller!');
      husbandBool = false;
      guessCounter = (guessCounter + 1);
    } else if (spouse === 'no' || spouse === 'n'){
      alert('Sorry, she\'s taken.');
      husbandBool = false;
    } 
    else {
      alert ('come on ' + userName + ', these are yes or no answers, try again');
    }
    console.log('Does Sharon have a spouse? ' + spouse);
  } while(husbandBool === true);
};

//question 2 kids
function questionTwo(){
  var kids = prompt('Does Sharon have kids?');
  kids = kids.toLowerCase();
  if(kids === 'yes' || kids === 'y' ) {
    alert('Yep, ' + userName + ' you got it, she has three kids: Gabe, Zach and Ava-Brooklyn!');
    guessCounter ++;    
  } else if (kids === 'no' || kids === 'n' ){
    alert('She has three kids, Gabe, Zach and Ava-Brooklyn.');
  } else {
    alert ('come on ' + userName + ', these are yes or no answers, try again');
  }
  console.log('Does Sharon have kids? ' + kids);
}    

//question 3 pet
function questionThree (){
  var pet = prompt('Does Sharon have a pet?');
  pet = pet.toLowerCase();
  
  if(pet === 'yes' || pet === 'y') {
    alert('Your right, ' + userName + ' she has a Pit-Boston Mix named Piper!');
    guessCounter ++;    
  } else if(pet === 'no' || pet === 'n') {
    alert('Actually, Sharon has a Pit- Boston Mix named Piper.');
  } else {
    alert ('come on ' + userName + ', these are yes or no answers, try again');
  }
  console.log('Does Sharon have a pet? ' + pet);
} 

//question 4 job
function questionFour(){
  var job = prompt('Does Sharon have a job?');
  job = job.toLowerCase();
  
  if(job === 'yes' || job === 'y' ) {
    alert('Your right! ' + userName);
    guessCounter ++;    
  } else if(job === 'no' || job === 'n') {
    alert('Oops, she has a job.');
  } else {
    alert ('come on ' + userName + ', these are yes or no answers, try again');
  }
  console.log('Does Sharon have a job? ' + job);
};

//question 5 hobby
function questionFive(){
  var hobby = prompt('Does Sharon have a hobby?');
  hobby = hobby.toLowerCase();
  
  if(hobby === 'yes' || hobby === 'y' ) {
    alert('uhhh, sorry!   ' + userName + ', Sharon has a spouse, a job, a pet and three kids... when would she have time for a hobby???');
  } else if (hobby === 'no' || hobby === 'n') {
    alert('yep- you guessed that one right, who has time for a hobby with a spouse, a job, a pet and three kids! ');
    guessCounter ++;    
  } else {
    alert ('come on ' + userName + ', these are yes or no answers, try again');
  }
  console.log('Does Sharon have a hobby? ' + hobby);
};

// guess the number question- how many times have i moved? answer 32
function questionSix(){
  var moveGuess = prompt('how many times have I moved');
  var numGuess;
  
  for (numGuess = 0; numGuess < 3; numGuess++ ) {
    console.log(numGuess + ' my counting guess - top of for loop');
    console.log(moveGuess + ' I input this - top of for loop');
    if (moveGuess > 32) {
      alert('Oops, that is too high'); //guess too high
      moveGuess = prompt('try again');// tell user to try again
    } else if (moveGuess < 32) {// guess too low
      alert('Oops, that is too low');
      moveGuess = prompt ('try again'); //tell user try again
    } else if (moveGuess == 32) {//guess it right
      alert('Nice job, you guessed it');//tell user correct
      guessCounter ++;      
      break;
    }
    if (numGuess === 2 ) {
      alert('You are all out of guesses, I have moved 32 times.');//user is all out of guesses
    }
  }
};

// 7th question- multiple possible correct answers that are stored in an array. ie can you guess a state that I have lived in besids washington. the user has 6 tries to get a single correct answer and uon those tries or getting the correct answer displays a message to the user indicating all of the possible correct answers

function questionSeven (){
  var correctAnswer = false;
  alert('Can you guess a state in which I have lived?');
  var statesLivedIn = ['washington', 'oregon', 'nebraska', 'california']; //states array
  var statesGuessed = 0;
  var states;
  
  for (statesGuessed = 0; statesGuessed < 5; statesGuessed++ ){
    states = prompt('Please guess a state I have lived in'); //which state question
    for (var i = 0; i < statesLivedIn.length; i++ ){
      if (states === statesLivedIn[i]) {
        alert ('That is correct! I have lived in ' + statesLivedIn ); //valid answer with states listed
        correctAnswer = true;
        guessCounter ++;      
        break;
      }
    }
    if (correctAnswer === true){
      break;
    } else if (statesGuessed !== 4) {
      alert ('try again, you have ' + (4 - statesGuessed) + ' guesses remaining');
    }
  }
  
  //we need to add in a way to count how many guesses
  if (correctAnswer === false){
    alert ('sorry you are all out of guesses, the correct answers ' + statesLivedIn );
  };
};

var guessCounter = 0;
function allQuestions(){
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
  alert('Great job! You got ' + guessCounter + ' out of 7 questions right.');
};

allQuestions();