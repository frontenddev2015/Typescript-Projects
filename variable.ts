const age: number = 12;

const fname: string = 'some text';

const isTrue: boolean = true;

const isNull : null = null;

const isUndefined : undefined = undefined;

const arrNum : Number[] = [1,2,3];

const multiDArray: string[][] = [
  ['hello'],
  ['hi'],
  ['bye']
]

const sayHello : (greeting: string) => void = (greeting) => {
  console.log(`Say ${greeting}`);
}

function greetingMessage(greeting: string): void {
  console.log(`Say ${greeting}`);
}

const anonymousFun = (greeting : string): void => console.log(`Say ${greeting}`);

const jsonData = '{"x": 5, "y": 4}';

const parsedData  : {x:Number, y: Number} = JSON.parse(jsonData);

console.log(parsedData); // to avoid of tye any, annotation needs to be added in the variable

const personDetails = {
  name: 'some name',
  age: 20,
  addr: {
    place: 'some place',
    houseno: '1234'
  }
}

function personDetailsCreator({name, age, addr:{place, houseno}}: {name: string, age: Number, addr:{place: string, houseno: string}}) {
  console.log('hosueno', houseno );
}

personDetailsCreator(personDetails);


interface personDetails {
  name : string,
  age: Number,
  hasAdhar: boolean
}


const objParameter = {
  name: 'name',
  age: 23,
  hasAdhar: true
}

// function findPersonDetails(objParameter: {name: string, age: Number, hasAdhar: boolean}) {

// }

function findPersonDetails(objParameter: personDetails): void {
  console.log(objParameter.name);
  objParameter.name = 78; // will throw error as the defiend type is string
}

// class User {

// }

// class Compay {

// }

// class customMap {

// }

// When both the User and Company has same property, in that case threre can an interface which holds the definition of the 
// class property and then both the class can implement the interface to make use of the code re-usability. same was if any other
// class has the similar property also can implement the interface


// Sorting

// interface sortable {

// }

// class Sorter {
  
// }

// class NumberCollection {

// }

// class CharacterCollection {

// }

// class LinkedList {

// }