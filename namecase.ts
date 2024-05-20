let personName: string = "Muskan";

// name in lowercase
let lowercase: string = personName.toLowerCase();

// name in uppercase
let uppercase: string = personName.toUpperCase();

// name in Titlecase
let titlecase: string = personName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');

console.log("Name in lowercase:", lowercase);
console.log("Name in uppercase:", uppercase);
console.log("Name in titlecase:", titlecase);