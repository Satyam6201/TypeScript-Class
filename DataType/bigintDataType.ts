console.log("BigInt Data Type");

var Number = 9007199254740991;
var x = 1;
var y = 2;

console.log(Number + x);
console.log(Number + y) // this is outoff range thats why it give me same output like above 


var bigNumber = 9007199254740991n;
var x1 = 1n;
var y2 = 2n;

console.log(bigNumber + x1); //9007199254740992n
console.log(bigNumber + y2);//9007199254740993n