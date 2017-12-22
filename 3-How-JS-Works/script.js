///////////////////////////////////////
// Lecture: Hoisting

calcAge(1965);

function calcAge(year) {
    console.log(2017 - year);
}


// The reason is because retirement is a function expresion and not a function declaration
// retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// This keyword refers to global 'Windo' since this is a global function
// and ustilzes the same
calcuAge(1990);
function calcuAge(year) {
    console.log(2017 - year);
    console.log(this);
};

// This keyword refers to object non because its an Object
var non = {
    name: 'Non',
    YOB: '1997',
    calcuAge: function() {
        console.log(this);
        console.log(2017 - this.YOB);

        // This keyword goes back to being window object because
        // the rule of thumb is that if a reg function call is 
        // called, the "this" keyword is referencing global

        /* Although this method is written inside another method
           in the non object, it is still considered a regular function,
           thus rendering 'this' a global keyword. */
        innerAge();
        function innerAge() {
            console.log(this);
        }
    }
};

non.calcuAge();


var kang = {
    name: 'kang',
    YOB: 1984
};

// **** CAN BORROW FUNCTIONS FROM OTHER OBJECTS, NO COPY PASTA ITS 
// SICK
kang.calcuAge = non.calcuAge; 
kang.calcuAge();