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