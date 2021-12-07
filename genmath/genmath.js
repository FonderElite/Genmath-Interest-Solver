var isFloat = function (n) {
    var parsed = Number.parseFloat(n);
    return (!Number.isNaN(parsed)) && (!Number.isInteger(parsed));
};
var simpleInterest = function (value) {
    var sInterestVal = [];
    var principalAmount1 = document.getElementById(value.element1);
    var rate1 = document.getElementById(value.element2);
    if (isFloat(String(rate1.value)) == true) {
        sInterestVal.push(Number(rate1.value));
    }
    else {
        var toDecimal = Number(rate1.value) / 100;
        rate1.value = String(toDecimal);
        sInterestVal.push(toDecimal);
    }
    var time1 = document.getElementById(value.element3);
    var simpleInterestAns = Number(principalAmount1.value) * sInterestVal[0] * Number(time1.value);
    var ans = document.getElementById("answer1");
    ans.value = "\u20B1" + String(simpleInterestAns);
};
function simpleInterestSolver() {
    simpleInterest({
        element1: "principal",
        element2: "rate",
        element3: "time"
    });
}
var compoundInterest = function (value) {
    var cInterestVal = [];
    var principal2 = document.getElementById(value.element1);
    var rate2 = document.getElementById(value.element2);
    if (isFloat(String(rate2.value)) == true) {
        cInterestVal.push(Number(rate2.value));
    }
    else {
        var toDecimal = Number(rate2.value) / 100;
        rate2.value = String(toDecimal);
        cInterestVal.push(toDecimal);
    }
    var n2 = document.getElementById(value.element3);
    var time2 = document.getElementById(value.element4);
    var ans2 = document.getElementById("answer2");
    var initialValue = 1 + cInterestVal[0] / Number(n2.value);
    var semiFinalValue = Number(principal2.value) * initialValue;
    var nxt = Math.pow(semiFinalValue, Number(n2.value) * Number(time2.value));
    ans2.value = "\u20B1" + nxt;
    //Formula  P (1 + r/n)^(nt)
};
function compoundInterestSolver() {
    compoundInterest({
        element1: "principal2",
        element2: "rate2",
        element3: "n2",
        element4: "rate2"
    });
}
