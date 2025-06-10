// if...else Condition:
let number = -5;

if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else {
    console.log(`${number} is neither a positive nor a negative number.`);
}

// switch Statement:
let dayNumber = 5;
let day;

switch (dayNumber) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        console.log(`There aren't ${dayNumber} days in a week.`);
}

console.log (`Day number ${dayNumber} is ${day}.`);

// for Loop:
for (let i = 1; i <= 5; i++) {
    console.log("Here, the 'for' loop prints " + i + ".");
}

// while Loop:
let i = 1;

while (i <= 5) {
    console.log("Then, the 'while' loop prints " + i + ".");
    i++;
}

// do...while Loop:
let j = 1;

do {
    console.log("And the 'do...while' loop prints " + j + ".");
    j++;
} while (j <= 5);

// break Statement:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(`Now, before the "break" statement, the "for" loop prints ${i}.`);
}

// continue Statement:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
     console.log(`As it's not skipped by the "continue" statement, the "for" loop prints ${i}.`);
}

// Scope and Context:
let globalVar = "I'm global!"

function testScope() {
    let localVar = "I'm local!"
    console.log(`Inside the function:\nThe global variable yells: "${globalVar}" and the local variable cries: "${localVar}"`);
}

testScope();

console.log(`Outside the function:\nThe global variable yells: "Told ya, ${globalVar}" while the local variable cannot be accessed outside the function.`);
console.log("Below is the proof:");
console.log(localVar);