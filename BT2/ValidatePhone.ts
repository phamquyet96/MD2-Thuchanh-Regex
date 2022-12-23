import {PhoneNumber} from "./PhoneNumber";

let ValidatePhone=new PhoneNumber();
let validNumber:string[]=['(84)-(0978489648)'];
let invalidNumber:string[]=["(a8)-(22222222)"];

console.log(ValidatePhone.validate(validNumber[0]));
console.log(ValidatePhone.validate(invalidNumber[0]));