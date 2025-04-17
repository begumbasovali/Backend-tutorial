//Use sillyname package to generate a random silly name
//var generateName = require("sillyname");
//import generateName from "sillyname";
//var sillyname = generateName();
//console.log(`My silly name is ${sillyname}.`);

//Use superheroes package to generate a random superhero name
import {randomSuperhero} from 'superheroes';
const name = randomSuperhero();
console.log(`I am ${name}.`);