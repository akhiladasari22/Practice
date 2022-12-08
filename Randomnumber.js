//Math.random() * (max - min + 1) + min  
//In the above formula, the min value is inclusive while the max value is exclusive.

//Let's create a program that generates random numbers between 200 to 400.


var min = 200;  
var max = 400;  
//Generate random double value from 200 to 400   
console.log("Random value of type double between "+min+" to "+max+ ":");  
  a = Math.random()*(max-min+1)+min;   
console.log(a);  
//Generate random int value from 200 to 400   
console.log("Random value of type int between "+min+" to "+max+ ":");  
var b = (Math.random()*(max-min+1)+min);  
console.log(b);  
