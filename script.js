string = 'one'

string2 = 'firvfoutheree'

numbers = ["one" , "two" , "three", "four", "five", "six", "seven", "eight", "nine"]


// function hellyeah (string) {
//     let subArr = [];
//     let str = string;

//     for(number of numbers) {
//         checkNumber(number, str, 0, subArr);
//         str = str;  
//     }

//     console.log(subArr);
// }


function checkNumber(number, str, n, subArr1) { 
    console.log('ran', number)
    if(n === number.length){return true & subArr1.push(number)}
    
    if(str.includes(number[n])) {
            checkNumber(number, str, n+1, subArr1)
            }
    else {return}         
}

function removeString(num, str) {
    for(letter of num){
    let y = (str.indexOf(letter) + 1);
    console.log(letter, y)
    let newStr = str.substring(0,y - 1) + str.substring(y, str.length);
    str = newStr;
    console.log(num, str);
    }
    return str
}

//removeString(numbers[2], string2);

            
//hellyeah(string2);



function program(numbers, string, n) {
let subArr1 = [];
str = string;

function cycleNumbers(numbers, str, z, subArr1) {
    if(z == 8){ return } 
    if(checkNumber(numbers[z], str, 0, subArr1) == true){
    console.log("true");
    cycleNumbers(numbers, removeString(numbers[z], str), z+1, subArr1);
    }
    else {cycleNumbers(numbers, str, z+1, subArr1)}
    }


cycleNumbers(numbers, str, n, subArr1);
console.log(subArr1);
}

program(numbers, string2, 0)




//checkNumber(numbers[z], str, 0, subArr1 );