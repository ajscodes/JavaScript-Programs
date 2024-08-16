//JSON-String to js object using parsing
const jsonString = '{"name": "Roy", "age": 28}'
const obj = JSON.parse(jsonString);
console.log(obj.name);
console.log(obj.age);

//js object to json-string using stringify
const object = {"name":"berlin", "age" :32 };
const jsonstring = JSON.stringify(obj);
console.log(jsonstring);