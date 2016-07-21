/*
=======================================================
** Week 1 - Project 1 **
Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.
In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.
EXAMPLE:
// 1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")
BASIC TRACK: 1-7
ADVANCED TRACK: 8-11
=======================================================
*/



// 1. Log your name to the console (as a string).
console.log("Question 1");
console.log("Jyothi")

// 2. Declare a new variable called 'name',
//    and then log it to the console.
console.log("Question 2");
var name="Jyothi";
console.log(name);

// 3. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
console.log("Question 3");
var x, y;
x=10;
y=20;
console.log(x+y);
console.log(x-y);
console.log(y*x);
console.log(y/x);

// 4. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places a space between the strings.
console.log("Question 4");
var firstName, lastName, fullName;
firstName= "Jyothi";
lastName= "Nookula";
fullName= firstName+ lastName;
console.log(fullName);

// 5. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the console.
console.log("Question 5");
var stringA="5", stringB="3";
console.log(stringA-stringB);
console.log(stringA+stringB);
console.log(stringA*stringB);
console.log(stringA/stringB);
// 6. Create an simple alert stating anything you wish. 
console.log("Question 6");
alert("I have a dream!");

// 7. Create a prompt that asks a user to pick a number.
//    Then double user's answer.
console.log("Question 7");
var number= prompt("choose a number between 1 and 10");
var double= number*2;
console.log(double);

// ADVANCED TRACK

// 8. Ask for a user's name, age and city.
//    In a single command display/log the sentence:
//   "My name is __. I'm __ years old, and I live in __."

console.log("Question 8");
var name= prompt("What is your first name?");
var age= prompt("What is your age?");
var city= prompt ("Which city do you live in?");
var output= "My name is "+ name + ". I'm "+ age+ " years old, and I live in "+ city+ ".";
console.log(output);

// 9. Create an alert that displays the response from a prompt. You can prompt the user for any kind of fun response. 
console.log("Question 9");
var response= prompt("Which movie did you see last week?");
var output= "Beware! We have a movie buff in house! Last movie was "+ response;
alert(output);

// 10. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the console. 
console.log("Question 10");
var length = 3;
var width = 2;
var area = length * width;
console.log("The area of the rectangle is: " + area+ " inches");


// 11. Prompt a user for their name. Find the length (number of characters) of their name and display the result in the console. 
console.log("Question 11");
var name= prompt ("What is your full name?");
var totalLength= name.length;
console.log(totalLength);

