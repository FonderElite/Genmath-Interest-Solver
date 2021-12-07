interface sI{
    element1:string;
    element2:string;
    element3:string;
}
interface cI{
    element1:string;
    element2:string;
    element3:string;
    element4:string;
}
const isFloat = (n:string) => {
    let parsed = Number.parseFloat(n);
    return (!Number.isNaN(parsed)) && (!Number.isInteger(parsed))
 }
const simpleInterest = (value:sI) =>{
let sInterestVal:Array<number> = [];
let principalAmount1 = document.getElementById(value.element1) as HTMLInputElement;
let rate1 = document.getElementById(value.element2) as HTMLInputElement;
if(isFloat(String(rate1.value)) == true){
sInterestVal.push(Number(rate1.value));
}else{
let toDecimal = Number(rate1.value) / 100;
rate1.value = String(toDecimal);
sInterestVal.push(toDecimal);
}

let time1 = document.getElementById(value.element3) as HTMLInputElement;
let simpleInterestAns = Number(principalAmount1.value) * sInterestVal[0] * Number(time1.value);
let ans = document.getElementById("answer1") as HTMLInputElement;
ans.value = `₱${String(simpleInterestAns)}`;
}
function simpleInterestSolver(){
    simpleInterest({
        element1:"principal",
        element2:"rate",
        element3:"time",
    });

}

const compoundInterest = (value:cI) =>{
let cInterestVal:Array<number> = [];
let principal2 = document.getElementById(value.element1) as HTMLInputElement;
let rate2 = document.getElementById(value.element2) as HTMLInputElement;
if(isFloat(String(rate2.value)) == true){
    cInterestVal.push(Number(rate2.value));
}else{
let toDecimal = Number(rate2.value) / 100;
rate2.value = String(toDecimal);
cInterestVal.push(toDecimal);
}
let n2 = document.getElementById(value.element3) as HTMLInputElement;
let time2 = document.getElementById(value.element4) as HTMLInputElement;
let ans2 = document.getElementById("answer2") as HTMLInputElement;
let initialValue = 1 + cInterestVal[0] / Number(n2.value);
let semiFinalValue = Number(principal2.value) * initialValue;
let nxt = Math.pow(semiFinalValue,Number(n2.value) * Number(time2.value));
ans2.value = `₱${nxt}`;
//Formula  P (1 + r/n)^(nt)
}
function compoundInterestSolver(){
    compoundInterest({
        element1:"principal2",
        element2:"rate2",
        element3:"n2",
        element4:"rate2"
    })
}

