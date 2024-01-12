//if statements 1 and 2 and 3
//if example 1
const age = 30;
let isAdult;
if (age >= 18) {
    isAdult = true;
}
isAdult;
console.log(isAdult);
//if example 2
let favnumber=32; 
    if(favnumber >=10)
    {
        favnumber=favnumber+10;
    }
    favnumber;
console.log(favnumber);
//if example 3
const name = "The White Rabbit";
let greeting;
if (name === "Alice") {
  greeting = "Hello, Alice!"
} else if (name === "The White Rabbit") {
  greeting = "Don't be late, White Rabbit"
} else if (name === "The Mad Hatter") {
  greeting = "Welcome to the tea party, Mad Hatter"
} else if (name === "The Queen of Hearts") {
  greeting = "Please don't chop off my head!"
} else {
  greeting = "Whoooo are you?"
}
greeting;
console.log(greeting);
//while statements
let favoriteNumber=40;
while(favoriteNumber <= 10) {
        favoriteNumber = favoriteNumber + 1
      }
      favoriteNumber;
      console.log(favoriteNumber);

      //IE ELSE//

    const miaka=10;
    let isTeen;
    if(miaka>=50)
    {
        isTeen=true;
    } else {
        isTeen=false;
    }
    isTeen;
    console.log(isTeen);

    //ternary expressions way one

    const mieri=5;
    let isChild;
    mieri>=18 ? (isChild = true) : (isChild = false) ;
    isChild;
    console.log(isChild);

    //ternary expressions way two
    const grow=25;
    let isG;grow<=100 ? isG=true : isG=false;
    isG;
    console.log(isG);

    //else ..if
    const dl =20;
    let canDrink,canDrive,canCelibate,canWork,canSleepover;
    if (dl>=21)
    {
      canDrink=true;
      canDrive=true;
      canCelibate=true;
      canWork=true;
      canSleepover=true;
    } else if (dl>=18) {
    canDrink=true;
      canDrive=true;
      canWork=true;
      canSleepover=true;
    }
    canCelibate,canDrink,canDrive,canSleepover,canWork;
    console.log("canCelibate:" , canCelibate);
    console.log("canDrink:" , canDrink);
    console.log("canDrive:" , canDrive);
    console.log("canWork:" , canWork);
    console.log("canSleepover:" , canSleepover);

    //switch 
    const names = "The Mad Hatter";
let greetings;
switch (names) {
    case "Alice":
      greetings = "Hello, Alice!";
      break;
    case "The White Rabbit":
      greetings = "Don't be late, White Rabbit";
      break;
    case "The Mad Hatter":
      greetings = "Welcome to the tea party, Mad Hatter";
      break;
    case "The Queen of Hearts":
      greetings = "Please don't chop off my head!";
      break;
    default:
      greetings = "Whoooo are you?";
  }
  greetings;
console.log(greetings);

//switch example 2
const majina = "Grumpy";
let characterType;

switch (majina) {
  case "Sleepy":
  case "Sneezy":
  case "Happy":
  case "Grumpy":
  case "Bashful":
  case "Dopey":
  case "Doc":
    characterType = "dwarf";
    break;
  case "Handsome Prince":
    characterType = "hero";
    break;
  case "Evil Queen":
    characterType = "villain";
    break;
  case "Snow White":
    characterType = "heroine";
    break;
  default:
    characterType = "minor character";
}

characterType;
console.log(characterType);

//strings
console.log("I must have logged", 1000, "times today.");
console.log("my name is stacy" +" "+"nduta" +" "+"njehia");
console.log('jina langu ni stacy');
console.log(`retwa riakwa ne nduta`);

//console.log
const jinas = "Byron the Poodle";
console.log("Hello,", jinas);

//console log two
const agess = 18;
let isBro=false, canWera=false, canEnlist=false, canLewa=false;
if (agess>= 21) {
  canWera = true;
  canEnlist = true;
  isBro= true;
  canLewa = true;
} else if (agess > 18) {
  console.log("The condition returned true")
  canWera = true;
  canEnlist = true;
  isBro = true;
} else if (agess >= 16) {
  canWera = true;
}
console.log(`Age: ${agess}\nCan work: ${canWera}\nCan enlist: ${canEnlist}\nIs a legal adult: ${isBro}\nCan drink: ${canLewa}`);