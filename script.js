var containerEle = document.body.querySelector(".container");

var num = Number(prompt("What is your bill amount?"));

var tax = (num)*0.07;

var tip = (num+tax)*0.05;

var sum = (num+tax+tip);

containerEle.innerHTML = sum;