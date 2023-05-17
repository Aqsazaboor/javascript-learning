const poster = document.querySelector(".poster");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let _WIDTH = (canvas.width = vmin(80));
let _HEIGHT = (canvas.height = vmin(98));
let refreshBtn = document.getElementById("refresh");

const numOfBokehs = 15;
let bokehArray = [];

refreshBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bokehArray = [];
  for (let i = 0; i < numOfBokehs; i++) {
    bokehArray.push(new Bokeh());
  }
});

class Bokeh {
  constructor() {
    this.size = Math.random() * 80 + 50;
    this.x = Math.random() * (canvas.width - this.size);
    this.y = Math.random() * (canvas.height - this.size);
    this.H = 240;
    this.S = Math.floor(Math.random() * 90 + 60);
    this.L = Math.floor(Math.random() * 60 + 10);
    this.angleX = Math.random() * 4 - 2;
    this.angleY = Math.random() * 4 - 2;
  }
  update() {
    this.x += Math.cos(this.angleX);
    this.y += Math.sin(this.angleY);
    if (this.x >= canvas.height - this.size || this.x <= this.size) {
      this.x -= Math.cos(this.angleX);
    }
    if (this.y >= canvas.height - this.size || this.y <= this.size) {
      this.y -= Math.sin(this.angleX);
    }
    this.angleX += 0.002;
    this.angleY += 0.002;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.fillStyle = `hsl(${this.H},${this.S}%,${this.L}%)`;
    ctx.fill();
  }
}

for (let i = 0; i < numOfBokehs; i++) {
  bokehArray.push(new Bokeh());
}

function vmin(vpPercent) {
  vpPercent = vpPercent / 100;
  let vpMinSize = Math.min(window.innerWidth, window.innerHeight);
  return vpPercent * vpMinSize;
}

function animate() {
  ctx.clearRect(0, 0, _WIDTH, _HEIGHT);
  bokehArray.forEach((bok) => {
    bok.draw();
    bok.update();
  });
  requestAnimationFrame(animate);
}

animate();

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
const myArray = ["h", "e", "l", "l", "o"];

// first element
console.log(myArray[0]); // "h"

// second element
console.log(myArray[1]); // "e"
let dailyActivities = ["eat", "sleep"];

// add an element at the end
dailyActivities.push("exercise");

// console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']
// let dailyActivities = ["eat", "sleep"];

// //add an element at the start
// dailyActivities.unshift("work");

// console.log(dailyActivities); // ['work', 'eat', 'sleep']

function func() {
  var arr = ["GFG", "gfg", "g4g", "GeeksforGeeks"];

  // Popping the last element from the array
  console.log(arr.pop());
}
func();
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
