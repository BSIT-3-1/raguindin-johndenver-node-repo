let n= 5;
let string = "";
 
function isOddOrEven(numberToCheck) {
//   // +, -, /, *, %
const isOdd = numberToCheck % 2 != 0;
 if (isOdd) return console.log(`The number ${numberToCheck} is odd`);
 else return console.log(`The number ${numberToCheck} is even`);

 return console.log(`The number ${numberToCheck} is ${numberToCheck % 2 != 0 ? "odd" : "even"}.`)
}

isOddOrEven(n);
for (let i = 0; i <= n; i++) {
  
  for (let j = n; j > i; j--) {
    string += " ";
  }
  
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = (n - i) * 2 - 1; k > 0;
       k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
