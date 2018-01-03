var julia = {
    name: 'julia',
    yearOfBirth: 1996,
    job: 'Dat Nurse'
};

// making 'Class' basically
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calcAge = function () {
        console.log(2017 - this.yearOfBirth);
    };
};

// testing out objects
var khang = new Person('khang', 1997, 'Crackhead');
var jerry = new Person('jerry', 1996, 'Amazon Cog');
console.log(julia);
console.log(khang);

// Adding a function to the persons' protoype property
// of our Person function, thus it is inherited and
// Person objects are still able to use them
Person.prototype.greeting = function() {
    console.log('Hi, I\'m ' + this.name);
};
jerry.greeting();

// Jerry's "prototype" is the prototype property of the Person object

/* ******************* ProtoType Chain *********** */


/* ********* Object Create Method ************ */

var personProto = {
    calcuAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
};

//Object.create
var jake = Object.create(personProto);
jake.name = 'Jake';
jake.yearOfBirth = 1990;
jake.job = 'teacher';


var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1990},
    job: { value: 'designer'}
});



/* ******** Primitives vs. Objects *********** */

// Primitives do not point to referecences
// a = 46, b = 23
var a = 23;
var b = a;
a = 46;

// both ages are 30 bc they reference to the same object
var obj1 = {
    name: 'non',
    age: 21
}
var obj2 = obj1;
obj1.age = 30;

// Functions
var age = 30;
var obj = {
    name: 'non',
    city: 'BKK'
};
function change(a, b) {
    a = 32,
    b.city = 'SF'
}
change(age, obj);
// Age variable is unchanged whereas city is changed to SF
console.log(age);
console.log(obj.city);



/* ************* First Class Functions **************** */

var years = [1990, 1965, 1937, 2005, 1998];

// Our function which takes an array of ints
// and anotehr fucntion and returns an array with values
// that have been calculated from the function that was
// passed in
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// our function that we are passing in
function calculateA(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) return Math.round(206.9 - (0.67 * el));
    return -1;
}

// calling our results
console.log(arrayCalc(years, calculateA));
var ages = arrayCalc(years, calculateA);
// calling our isFullAge func
console.log(arrayCalc(ages, isFullAge));
// calling maxHearRate func
console.log(arrayCalc(ages, maxHeartRate));


/* ************* Functions Returning Functions *********** */

// Generic functions returning more specific functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain UX?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ", what do you teach?");
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ' what do you do?');
        }
    }
};

// Teacher q that is returned
var teacherQ = interviewQuestion('teacher');
teacherQ('Non');

// Can do both functions like this as well
interviewQuestion('cop')('Jules');