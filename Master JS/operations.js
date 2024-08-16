console.log(2+2);
console.log(2**4);
console.log(2%3);

let str1 = "hello"
let str2 = " Jolly"
let str3 = str1 + str2

console.log("1" + 2); // o/p: 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 = (1+2)2
console.log(1+4+5+6+"76"); //1676
console.log("76"+1+4+5+6); //761456
console.log("76"+1+4+5+6 + "45" + 1+2+3+6);//761456451236
//String to number conversion rules are reserved acc to ECMA
//if string come first then direct concate without operation
// but if string is at last position then operation before string performed and it concate with string


let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter);
