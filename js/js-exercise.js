"use strict";
function findMax(num1, num2){
    let parseNum1 = Number(num1);
    let parseNum2 = Number(num2);
    if(parseNum1 == NaN || parseNum2 ==  NaN)
        return null;
    if(parseNum1 > parseNum2) 
        return parseNum1;
    else 
        return parseNum2;
}

console.log("1.findMax " + findMax(1,5))
console.log("1.findMax " + findMax("1",5))
console.log("1.findMax " + findMax("abc",3))

function maxOfThree(num1, num2, num3){
    return (findMax(findMax(num1,num2),num3));
}

console.log("2.maxOfThree " + maxOfThree(1,5,11))
console.log("2.maxOfThree " + maxOfThree("1","-4",5))
console.log("2.maxOfThree " + maxOfThree("abc",1,3))

function isVowel(str){
    if(str.length != 1)
     return false;

    const regex = "[aeoiu]";
    return str.match(regex) == null ? false : true;
}

console.log("3.isVowel "+ isVowel("a"))
console.log("3.isVowel "+ isVowel("b"))
console.log("3.isVowel "+ isVowel("ab"))
console.log("3.isVowel "+ isVowel("a2"))
console.log("3.isVowel "+ isVowel("1"))

function sum(){
    let sum = 0;
    let curIdx = 0;
    while(curIdx < arguments.length)
    {
        sum += arguments[curIdx++];
    }
    return sum;
}

console.log("4.sum "+ sum(1,2,3,4))

function multiply(){
    let multiply = 1;
    let curIdx = 0;
    while(curIdx < arguments.length)
    {
        multiply *= arguments[curIdx++];
    }
    return multiply;
}

console.log("4.multiply "+ multiply(1,2,3,4))

function reverse(str){
    let curIdx = str.length;
    let result = "";
    while(curIdx >= 0){
        result = result.concat(str.charAt(curIdx--));
    }
    return result;
}

console.log("5.reverse "+ reverse("Hieu Giao"));

function findLongestWordLength(strArray){
    let strLengths = strArray.map(str => str.length);
    let max = 0;
    let i;
    for(i = 0; i < strLengths.length; i++){
        max = findMax(max,strLengths[i]);
    }
    return max;
}

console.log("6.findLongestWordLength "+ findLongestWordLength(['Apple','Water lemon','Grape','Banana']))

function filterLongWords(strArray, i){
    return strArray.filter(o => o.length > i);
}
console.log("7.filterLongWords "+ filterLongWords(['Apple','Water lemon','Grape','Banana'], 5))

function computeSumOfSquares(intArr){
    return intArr.reduce((sum, current) => sum += current * current);
}

console.log("8.computeSumOfSquares "+ computeSumOfSquares([1,2,3,4,5]))

function printOddNumbersOnly(strArray){
    return strArray.filter(o => o % 2 == 0);
}

console.log("9.printOddNumbersOnly "+ printOddNumbersOnly([1,2,3,4,5]))

function computeSumOfSquaresOfEvensOnly(intArr){
    return intArr.filter(o => o % 2 == 0)
                 .reduce((sum, current) => sum += current * current);
}

console.log("10.computeSumOfSquaresOfEvensOnly "+ computeSumOfSquaresOfEvensOnly([1,2,3,4,5]))

function sumReduce(intArr){
    return intArr.reduce((sum, current) => sum += current);
}
console.log("11.sumReduce "+ sumReduce([1,2,3,4,5]))

function multiplyReduce(intArr){
    return intArr.reduce((multi, current) => multi *= current);
}
console.log("11.multiplyReduce "+ multiplyReduce([1,2,3,4,5]))

function printFibo(n,a,b){
    let arr = new Array(n);
    let i;
    arr[0] = a;
    arr[1] = b;
    for(i = 2; i < n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

console.log("12.printFibo " + printFibo(2,0,1))
console.log("12.printFibo " + printFibo(3,0,1))
console.log("12.printFibo " + printFibo(6,0,1))
console.log("12.printFibo " + printFibo(10,0,1))
