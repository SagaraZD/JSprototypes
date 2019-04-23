// Prototypes #######################################################

// Person constructor
function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting 
Person.prototype.greeting = function(){
    return ` Hello there ${this.firstName} ${this.lastName} `;
}

const person1 = new Person('John', 'Doe');

//console.log(person1.greeting());

// Inhirit the person prototype method
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype rertun customer
Customer.prototype.constructor = Customer; 

// Customer constructor
function Customer (firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Create customer
const customer1 = new Customer ('Tom', 'Smith', '555-555-5555', 'Standard');

//console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
    return ` Hello there ${this.firstName} ${this.lastName}  welcome to our company`;
}

//console.log(customer1.greeting());


// Object create ####################Alternative way to create prototypes ###########################################

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');
console.log (mary.greeting());

const bard = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

console.log(bard.greeting());