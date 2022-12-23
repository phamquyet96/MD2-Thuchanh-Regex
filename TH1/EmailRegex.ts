import {EmailRegex} from "./Regex";

let emailRegex= new EmailRegex();
let validEmail:string[]=["a@gmail.com","123dad@gmai.com","Zasg@gmail."];
let invalidEmail:string[]=["@gmail.com","afasf@gmail.","123#@gmail.com"];

for(let email of validEmail){
    let isvalid:boolean=emailRegex.validate(email);
    console.log(email+isvalid)
}
for(let email of invalidEmail){
    let isinvalid:boolean=emailRegex.validate(email);
    console.log(email+isinvalid)
}