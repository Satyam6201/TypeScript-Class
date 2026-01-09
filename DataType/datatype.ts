// Primitive data Type 

// Number Type
var num:number = 20;
var num1:number = 30;

var total:number = num + num1;
console.log(total);

// binary, hexa, octa number 
var octa:number = 0o100001;
var bin:number = 0b00001;
var hexa:number = 0x0001;

console.log(octa + " bin = " + bin + " hexa = " + hexa )

// conver number 
var item: number = 20;
var item1: number = 30;
var item2 = "40"

var item2ConveterInNumber = Number(item2)  //+item2,   Number(item2)

console.log(item + item1 + item2) // 5040   
console.log(item + item1 + item2ConveterInNumber); //90

// String Type 
var str:string = "satyam";
var str1:string = 'satyam';
var str2:string = `satyam`;

var age:number = 40;

var man:string = `name of student = ${str} and his age is = ${age} years`;
console.log(man);

// convert in string

var str3:string = "mishra";

var age2:number = 36;
// var strConveter:string = String(age2);
// var strConveter:string = "" + age2;
var strConveter:string = age2.toString();


var result:string = strConveter;
console.log(result)

// Boolean 
var bool:boolean = false;
console.log(bool)


//  null
var login:null = null;
// Initial value null de di
var sign: null | string = null; 

if (login) {
    sign = "Satyam Kumar Mishra";
}

console.log(sign);
console.log(typeof login)  // object

// underfine 
var items:undefined = undefined;

console.log(typeof items);  // undefine 

if (login === items) {
    console.log("Both are equal");
}
else {
    console.log("Not equal");
}