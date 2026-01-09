// Primitive data Type 
// Number Type
var num = 20;
var num1 = 30;
var total = num + num1;
console.log(total);
// binary, hexa, octa number 
var octa = 32769;
var bin = 1;
var hexa = 0x0001;
console.log(octa + " bin = " + bin + " hexa = " + hexa);
// conver number 
var item = 20;
var item1 = 30;
var item2 = "40";
var item2ConveterInNumber = Number(item2); //+item2,   Number(item2)
console.log(item + item1 + item2); // 5040   
console.log(item + item1 + item2ConveterInNumber); //90
// String Type 
var str = "satyam";
var str1 = 'satyam';
var str2 = "satyam";
var age = 40;
var man = "name of student = ".concat(str, " and his age is = ").concat(age, " years");
console.log(man);
// convert in string
var str3 = "mishra";
var age2 = 36;
// var strConveter:string = String(age2);
// var strConveter:string = "" + age2;
var strConveter = age2.toString();
var result = strConveter;
console.log(result);
// Boolean 
var bool = false;
console.log(bool);
//  null
var login = null;
// Initial value null de di
var sign = null;
if (login) {
    sign = "Satyam Kumar Mishra";
}
console.log(sign);
console.log(typeof login); // object
// underfine 
var items = undefined;
console.log(typeof items); // undefine 
if (login === items) {
    console.log("Both are equal");
}
else {
    console.log("Not equal");
}
