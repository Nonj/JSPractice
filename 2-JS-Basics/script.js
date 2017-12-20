
/////////////////////////////////////////////////////////
/*
Lecture 1 Code

var name = 'Non'; 
console.log(name);
var lastName = ' Bunya';
console.log(name + lastName);
var fullName = name + lastName;
var age = 25;

console.log(fullName + ' is ' + age);

var fullAge = true;

console.log(fullAge)
*/


/////////////////////////////////////////////////////////
// Lecture 2 variables
 /*var job, married;

console.log(job);

job = 'teacher';
married = 'true';

var lastName = prompt('Tell me your last name.');

console.log(lastName);

alert('name?'); */

/*
// Lecture 3: Operators
var birthYear = 2016 - 26;
birthYear = birthYear - 26 * 2;

var nonAge = 30;
var kangAge = 30;

// Goes kangAge = 26
// then nonAge = kangAge which is 26 so both should be 26
nonAge = kangAge = (3 + 5) * 4 - 6;

console.log(nonAge);

*/


/////////////////////////////////////////////////////////
//Lecture 4 (If/else)

/*
var name = 'Non';
var age = '25';
var isMarried = true;

if (isMarried) {
    console.log(name + " is married");
} else {
    console.log(name + ' needs to marry');
}


if (23 == '23') {
    console.log('Type Coercicion with two equals value');
}

if (23 === '23') {
    console.log(' No Type Coercicion with three equal signs');
}

*/


/////////////////////////////////////////////////////////
// Lecture 5 (Boolean Logic and Switch)
/*
var l7job = 'Teacher';
l7job = prompt('Enter Job Here:');

switch (l7job) {
    case 'Teacher':
        console.log('Teaching is fun');
        break;

    case 'Firefighter':
        console.log('Fighting fires day in and out');
        break;

    case 'Cop':
        console.log('Crime Fighter');
        break;
    
    // 'Else statement'
    default:
        console.log('Your job is cool');
}
*/


/////////////////////////////////////////////////////////
// Coding Challenge #1
/*
var CC1nonAge = 20;
var CC1friendAge = 21;

var CC1nonHeight = 165;
var CC1friendHeight = 162;

function CC1calculateScore(height, age) {
    return height + age  * 5;

}

var CC1nonScore = CC1calculateScore(CC1nonHeight, CC1nonAge);

var CC1friendScore = CC1calculateScore(CC1friendHeight, CC1friendAge);

if (CC1nonScore > CC1friendScore) console.log('Non Wins!');
else console.log('Non Loses!');
*/


/////////////////////////////////////////////////////////
// Lecture 6: Functions
/*
// Function statement:
function l6someFunc(para) {

}

// Function Expressions
var l6someFuncX = function(par) {

}
*/


/////////////////////////////////////////////////////////
// Lecture 7: Arrays

/*
var l4nameArr = ['non', 'bun', 'fun'];
var l4years = new Array(1990, 1969, 1948);

var l4non = ['Non', 'Bun', 1997, false];

// Inserts element at begining of array
l4non.unshift('Mr.');

// Inserts element at end of array
l4non.push('Emerald');

// removes and return last element in array
l4non.pop();

// removes and return first element in array
l4non.shift();

alert(l4non.indexOf('Non'));

if (l4non.indexOf('Car') === -1) {
    console.log('Non has no car');
} else {
    console.log('Vroom vroom');
}
*/


/////////////////////////////////////////////////////////
//Lecture: Objects
/*
var non = {
    fName: 'Non',
    lName: 'Bun',
    DOB: '1997-05-05',
    job: 'F1 Driver',
    isMarried: false
};

// All accessing 'fName' key
var xyz = 'fName';
console.log(non.fName);
console.log(non['fName']);
console.log(non[xyz]);

// Can just change value like so
non.job = 'Programmer';

var kang = new Object();
kang.fName = 'Kang';
kang.lName = 'Li';
kang.DOB = '1996-01-15';
kang.family = ['Lee', 'Bee', 'Me'];
kang.age = 18;
kang.calculateAge = function() {
    return 2017 - this.age;
}
// Accessing 'Kang Object'
console.log(kang);
console.log(kang.family);
console.log(kang.calculateAge());


var non = {
    fName: 'Non',
    lName: 'Bun',
    DOB: '1997-05-05',
    job: 'F1 Driver',
    isMarried: false,
    calcAge: function() {
        this.age = 2017 - 1997;
    }
};

non.calcAge();
console.log(non.age);
*/

///////////////////////////////////////////////////////////////////
// Lecture: Loops

/*
for (var i = 0; i < 9; i++) {
    console.log(i);
}
var j = 0;
while (j < 9) {
    console.log(j);
    j++;
}

*/


///////////////////////////////////////////////////////////////////
// Coding Challenge 2
var yearOfBirth = [1999, 1997, 2002];
var yearsArr = [];


function printFullAge(years) {
    var toRett = [];
    for (var i = 0; i < years.length; i++) {
        if (2017 - years[i] >= 18) {
            toRett.push(true);
        } else toRett.push(false);
    }
    return toRett;
}

yearsArr = printFullAge(yearOfBirth);
console.log(yearsArr);

