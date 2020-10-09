// var message = "in global";
// console.log("global: message = " +message);

// var a = function() {
// 	var message = "inside a";
// 	console.log("a: message = " +message);
// 	b();
// }
// var b = function() {
// 	console.log("b: message = " +message)
// }
// a();

// var x;
// console.log(x);

// if (x ==undefined) {
// 	console.log("x is undefined");
// }
// x = 5;
// if (x == undefined) {
// 	console.log("x is undefined");
// }
// else {
// 	console.log("x has been defined");
// }

// var string = "Hello";
// string += " World";
// console.log(string + "!!");

// Regular math operators: +,-,*,/
// console.log((5 + 4) / 3);
// console.log(undefined / 5);

// Equality
// var x = 4, y = 4;
// if (x == y){
// 	console.log("x=4 is equal to y=4");
// }

// x = "4";
// if (x == y) {
// 	console.log("x='4' is equal to y=4");
// }
// // Strict equality
// if (x === y) {
// 	console.log("Strict: x='4' is equal to y=4");
// }
// else {
// 	console.log("Strict: x='4' is NOT equal to y=4");
// }

// If  statement (all false)
// if (false || null || undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute");
// }
// else {
// 	console.log("All false");
// }

// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }

// Best practice for {} style
// Curly brace on the same or next line
// Is it just a style?

// function a()
// {
// 	return
// 	{
// 		name: "Prashant"
// 	};
// }
// function b() {
// 	return{
// 		name: "Prashant"
// 	};
// }
// console.log(a());
// console.log(b());

// FOR loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// console.log("Sum of 0 through 9 is: " +sum);

// Default Values
// function orderChickenWith(sideDish) {
// 	sideDish = sideDish || "sauce"
// 	console.log("Chicken with " +sideDish);
// }
// orderChickenWith("Noodles");
// orderChickenWith();

// Object Creation
// var company = new Object();
// company.name = "Facebook"
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "Blue";

// console.log(company);
// console.log("CEO of the company is " +company.ceo.firstName);

// console.log(["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log(company);
// console.log("Stock price is: " + company[stockPropName]);

// Better way: object literal
// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "Blue"
// 	},
// 	"stock of company": 110
// };
// console.log(facebook.ceo.firstName);

// Functions are First-Class Data
// Functions ARE objects
// function multiply(x,y) {
// 	return x * y;
// }

// console.log(multiply(3,4));
// multiply.version = "v.1.0.0";
// console.log(multiply.toString());

// // Function factory
// function makeMultiplier(multiplier){
// 	var myFunc = function (x) {
// 		return multiplier * x
// 	};

// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(5));

// Passing functions as arguments
// function doOperationOn (x, operation) {
// 	return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// Copy by REFERENCE vs Copy by VALUE
// var a = 7;
// var b = a;
// console.log("a: " +a);
// console.log("b: " +b);

// b = 5;
// console.log("after b update:");
// console.log("a: " +a);
// console.log("b: " +b);

// var a = { x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x updates: ");
// console.log(a);
// console.log(b);

// Pass by REFERENCE  vs pass by VALUE
// function changePrimitive(primValue){
// 	console.log("in changePrimitive...");
// 	console.log("Before: ");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("After: ");
// 	console.log(primValue);
// }
// var value = 7;
// changePrimitive(value);
// console.log("After changePrimitive, original value is :");
// console.log(value);

// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("Before: ");
// 	console.log(objValue);

// 	objValue.x = 5;
// 	console.log("After: ");
// 	console.log(objValue);
// }

// value = {x:7};
// changeObject(value);
// console.log("After changeObject, original value is :")
// console.log(value);


// Fucntion constructors
// function Circle(radius){
// 	this.radius = radius;
// }

// Circle.prototype.getArea = 
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// };	
// var myCircle = new Circle(10);
// console.log(myCircle);

// var myCircle2 = new Circle(30);
// console.log(myCircle2.getArea());

// Object literals and "this"
// var literalCircle = {  //new object is created
// 	radius: 10,
// 	getArea: function () {
// 		console.log(this);

// 		var increaseRadius = function(){
// 			this.radius = 20;
// 		};
		
// 		increaseRadius();
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };
// console.log(literalCircle.getArea());
// literalCircle.getArea();

// var literalCircle = {  //new object is created
// 	radius: 10,
// 	getArea: function () {
// 		var self = this;
// 		console.log(this);

// 		var increaseRadius = function(){
// 			self.radius = 20;
// 		};
		
// 		increaseRadius();
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };
// console.log(literalCircle.getArea());
// literalCircle.getArea();


// In this we got to learn that the second argument is not used in the function but is perfectly legal to pass in it.
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();

// Arrays
// var array = new Array();
// array[0] = "Prashant";
// array[1] = 67;
// array[2] = function (name) {
// 	console.log("Hello " +name);
// };
// array[3] = {
// 	course: "HTML, CSS and JS"
// };
// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// Short hand array creation
// var names = ["Prashant", {name:"Dhanu"} ,"Shyam"];
// console.log(names);

// var names = ["Prashant", "Dhanu", "Shyam"];
// // console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " +names[i]);
// }

// names[100] = "Sai";
// console.log("*. After Adding a name at 99th position: ")
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " +names[i])
// }

// var names2 = ["Prashant", "Dhanu", "Shyam"];

// var myObj = {
// 	name: "Prashant",
// 	course: "HTML",
// 	platform: "Coursera"
// };
// for (var prop in myObj) {
// 	console.log(prop+ ": " +myObj[prop]);
// }

// for (var name in names2) {
// 	console.log("Hello " +names2[name]);
// }

// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);

// Closures
// function makeMultiplier (multiplier) {
// 	function b () {
// 		console.log("Multiplier is: " +multiplier)
// 	}
// 	b();
// 	return (
// 		function (x) {
// 			return multiplier * x;
// 		}
// 		);
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));

(function (window) {
var prashantGreeter = {};
prashantGreeter.name = "Prashant";
var greetings = "Hello "
prashantGreeter.sayHello = function() {
	console.log(greetings + prashantGreeter.name);

}
window.prashantGreeter = prashantGreeter;
})(window);


// (function (window){
// 	var dhanuGreeter = {};
// 	dhanuGreeter.name = "Dhanu";
// 	var greetings = "Hi "
// 	dhanuGreeter.sayHi = function () {
// 		console.log(greetings + dhanuGreeter.name);
// 	}

// 	window.dhanuGreeter = dhanuGreeter


// })(window);

