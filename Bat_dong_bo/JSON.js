// Convert JSON to Object
const data = '{"name" : "Le Ngoc Truong", "age" : 20}';
const objectData = JSON.parse(data);
console.log(data);
console.log(objectData);

// Convert to Object to JSON
const JSONData = JSON.stringify(objectData);
console.log(JSONData);