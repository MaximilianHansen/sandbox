

let anagram = 'fooneurninethreenine'

let numbers = ["four","nine" ,"one" ,"two" , "three", "five", "six", "seven", "eight", "nine"]


function checkNumber(number, string, n, subArr1, stringArr) { 
    if(n == number.length){ return removeString(number, string, stringArr) & subArr1.push(number)}
    
    if(string.includes(number[n])) {
            checkNumber(number, string, n+1, subArr1, stringArr)
            }
    else { return }         
}

function removeString(num, string, stringArr) {
    for(letter of num){
    let y = (string.indexOf(letter) + 1);
    string = string.substring(0,y - 1) + string.substring(y, string.length);
    }
  return stringArr.push(string);
}

function cycleNumbers(numbers, string, z, subArr1, stringArr) {
    if(stringArr[(stringArr.length-1)] == ''){ return } 
    if(z > 8 ){z = 0}
    checkNumber(numbers[z], stringArr[(stringArr.length-1)], 0, subArr1, stringArr);
    cycleNumbers(numbers, stringArr[(stringArr.length-1)], z+1, subArr1, stringArr);
}

function convertToInt (array) {
let subArr3 = [];
    for (word of array){
        if(word == "one"){
            subArr3.push(1);
        }
        if(word == "two"){
            subArr3.push(2);
        }
        if(word == "three"){
            subArr3.push(3);
        }
        if(word == "four"){
            subArr3.push(4);
        }
        if(word == "five"){
            subArr3.push(5);
        }
        if(word == "six"){
            subArr3.push(6);
        }
        if(word == "seven"){
            subArr3.push(7);
        }
        if(word == "eight"){
            subArr3.push(8);
        }
        if(word == "nine"){
            subArr3.push(9);
        }
    }
    return subArr3.sort()
}
function program(numbers, str, n) {
let subArr1 = [];
let stringArr = [];
stringArr[0] = str;

cycleNumbers(numbers, stringArr[(stringArr.length-1)], n, subArr1, stringArr);
console.log(convertToInt(subArr1), "program output");

    }

    program(numbers, anagram, 0)


