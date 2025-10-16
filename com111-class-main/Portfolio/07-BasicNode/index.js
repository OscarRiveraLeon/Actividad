import sw from 'star-wars-quotes';
import { randomSuperhero } from 'superheroes';
import { randomSupervillain } from 'supervillains';
import fs from 'fs';

// 1. Hello world
console.log("Hello world");

// 2. 'require' tool (con la sintaxis de import)
let s = sw();
console.log(s);

// 3. Multiple calls
let myHero = randomSuperhero();
let myVillain = randomSupervillain();
console.log(`${myHero} fights with ${myVillain}`);

// 4. Read file
let myObj = fs.readFileSync('data/input.txt', 'utf-8');
console.log(myObj);