// Types in Typescript

/*Number,
String,
Boolean,
Null,
Undefined,
Void,
Object,
Array,
Tuples,
Any -> "any" can be used whenever you don't want a particular value
to cause typechecking errors.

polyfill -> means the code which is transpile to js
 */

// Syntax: let variableName:type = value

// string

let greetings:string = "Hello Arpita";
console.log(greetings);

// number

// Numbers are not equivalent to int or float - everything is simply number

let userId:number = 37624.333;
userId.toFixed();
console.log(userId)

// boolean

let isLoggedIn:boolean = false;

// any : don't use

let hero;

function getHero(){
    return "hero";
}

hero = getHero()
export {}