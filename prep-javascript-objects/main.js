
var person = {
  firstName: 'Nicholas',
  lastName: 'Cardoza',
  hobby: 'Archery'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:", fullName);

person.job = 'Crushing it';

console.log("The person's current job is: " + person.job + '!!!');

person.previousJob = 'Metal Fabrication';

console.log("The person's previous job is: " + person.previousJob + '.');

console.log('The complete person Object:', person);
