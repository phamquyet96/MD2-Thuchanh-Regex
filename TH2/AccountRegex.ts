import {AccountRegex} from "./Pattern";

let accountRegex=new AccountRegex();
let validAccount:string[]=["faf_67","dgd777","123abc"];
let invalidAccount:string[]=["adgda57878","yagfy_sds","1323#g"];
for(let regex of validAccount){
    console.log(accountRegex.validate(regex))
}
for(let regex of invalidAccount){
    console.log(accountRegex.validate(regex))
}