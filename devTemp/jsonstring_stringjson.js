const jsonExample = {
    "name" : "Name Teste",
    "age" : 20,
    "programer" : true,
    "hobbies" : ["Video game", "eat food", "Play soccer"]
}

const jsonString = JSON.stringify(jsonExample);
console.log(jsonString);

const json = JSON.parse(jsonString);
console.log(json);
console.log(json.hobbies)