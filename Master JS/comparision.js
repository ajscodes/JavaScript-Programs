console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
//--> answer in true or false

console.log("2" > 1);
console.log("02" > 1);
//--> it's convert string to number automatically

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//--> take "null" as "0"
//--> equality works(==) but comparision operations works differently 

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===
//--> it strictly make comparision: compare value and it's datatype 
console.log(2 === 2); //true
console.log("2" === 2); //false