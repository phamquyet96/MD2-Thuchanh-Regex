import {Validate} from "./Validate";

let ValidateClass=new Validate();
let validValidate:string[]=["C0318G"];
let invalidValidate:string[]=["M0318G","P0323A"];

console.log(ValidateClass.validate(validValidate));

for(let regex of invalidValidate){
    console.log(ValidateClass.validate(regex))
}