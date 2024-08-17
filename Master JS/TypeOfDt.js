//Two types: 
//(1) Primitive : 
//It's a call by value type data which is directly stored in memory(stack). In this datatype we get copy of original
//data and we can able to change into this copy but not access direct original.
//It's a fixed sized.
//Ex. String, Number, Boolean, Undefined, Null, Symbol, BigInt

//(2) Non-Primitive:
//It's a call by reference type value. we can directly access original data which are stored as references to objects (heap).
//Variable sized.
//Derived from primitive.
//Ex. Array, Function, Object 

//typeOf:
//Undefined = undefined
//Boolean = boolean
//Number = number
//String = string
//Function = function (object of function)
//Null = object
//Array = object 
//Object = object



const score = 100
const sValue = 100.3

const isEnter = false
const outTemp = null
let userEmail = "ayn@gmail.co";
let undefinedTry;

const id = Symbol('250')
const otherId = Symbol('250')

console.log(id === otherId);

const myFunction = function(){
    console.log("Hi");
}

const animal = ["dog", "cow", "lion"];
let myObj = {
    name: "roy",
    age: 22,
}

console.log(typeof myObj);