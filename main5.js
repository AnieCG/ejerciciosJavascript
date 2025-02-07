/*For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/


let personas= ["Maria", "Dani", "Luis", "Juan", "Camila"];


personas.forEach(persona => console.log(persona));

let indexDani = personas.indexOf("Dani");
if (indexDani !== -1) {
  personas.splice(indexDani, 1);
}


let indexJuan = personas.indexOf("Juan");
if (indexJuan !== -1) {
  personas.splice(indexJuan, 1);
}


let indexLuis = personas.indexOf("Luis");
if (indexLuis !== -1) {
  personas.splice(indexLuis, 1); 
  personas.unshift("Luis"); 
}

personas.push("Nombre"); 

for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
  if (personas[i] === "Maria") {
    break;
  }
}

let mariaIndex = personas.indexOf("Maria");
console.log(mariaIndex);

console.log('Array final: ' + personas);