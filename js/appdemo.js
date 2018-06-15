'use strict';

//day 4 demo:
//
// console.log('im working'); 
// function syntax
var clickButton= document.getElementById('clickMe');
console.log(clickButton);

clickButton.addEventListener('click', function(){
  console.log('you clicked me');
});

function functionName (parameter1, parameter2) {
  return parameter1 + parameter2;
}
function calculateArea(width, height) {
  var area = width * height;
  return area;
}
console.log(calculateArea(8,10));
// calculateArea(); //invoking the function

function circleProperties (radius){
  var diameter = radius * 2;
  var area = radius * radius * Math.PI;

  return [diameter, area];//array
}
console.log(circleProperties(4));

var sharonName = (function() {
  return 'sharon';
})(); //this is an iffeeee immidiately invoked function expression

// alert('Welcome to my site, lets play a guessing game about me');

// // var userName= 'sharon';

// var moveGuess = prompt('how many times have I moved');
// var numGuess;

// for (numGuess = 0; numGuess < 3; numGuess++ ) {
//   console.log(numGuess + ' my counting guess - top of for loop');
//   console.log(moveGuess + ' I input this - top of for loop');
//   if (moveGuess > 32) {
//     console.log('greater than 32');
//     alert('Oops, that is too high'); //guess too high
//     moveGuess = prompt('try again');
//     console.log(moveGuess);
//   } else if (moveGuess < 32) {
//     console.log('less than 32');
//     alert('Oops, that is too low');
//     moveGuess = prompt ('try again');
//   } else if (moveGuess == 32) {
//     console.log('equal to 32');
//     alert('Nice job, you guessed it');
//     break;
//   }
//   if (numGuess === 2 ) {
//     alert('You are all out of guesses.');
//   }
//   console.log(numGuess + ' x\'s through loop');

//   else {
//     alert ('Wrong anser, try again!');
// } 
// }
//may need to move .toLowerCase()

// // while(true) {
// //   var wereYouBorn = prompt('was i born?');
// //   if (wereYouBorn === null) continue;
// //   wereYourBorn === wereYouBorn.toLowerCase();

// //   if(wereYouBorn === 'y' || wereYouBorn === 'yes') {
// //     alert('of course i was');
// //     break;
// //   } else if (wereYouBorn === 'n' || wereYouBorn === 'no'){
// //     alert('how did you know');
// //     break;
// //   } else {
// //     alert('You need to use a yes or no');
// //   }
// // }

// // var favoriteFoods = ['tacos', 'smoothies', 'pasta'];

// // for (var incrementor = 0; incrementor < favoriteFoods.length; incrementor++){
// //   console.log (favoriteFoods[incrementor]); 
// // }


// //external counter for while loops

// var counterForFoods = 0;

// while(counterForFoods < 3) {
//   var foodGuess = prompt ('what is one of my favorite foods');
//   if (foodGuess = 'tacos')
//     alert ('nice job');
//   break;
// }

// counterForFoods ++; 

// //how to build a number generator 
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(3));
// // expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// // expected output: 0

// console.log(Math.random());
// // expected output: a number between 0 and 1

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }

// var counterForMoves = 0;
// while (moveGuess > 32) {
//   alert ('Oops, that is too high');
//   moveGuess = prompt ('try again');
// }
// else if (moveGuess < 32) {
//   alert ('Thats to low, try a higher number');
//   moveGuess = prompt ('try again');
// }
// else {
//   alert('Please enter a number');

//   alert('Sorry you are out of guesses, the answer is 32');
// }
// else if mov

// do{
//   states = prompt();
// } while (states !== statesLivedIn );
//   var i = 0; 