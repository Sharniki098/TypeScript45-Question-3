var personName = "Muskan";
// name in lowercase
var lowercase = personName.toLowerCase();
// name in uppercase
var uppercase = personName.toUpperCase();
// name in Titlecase
var titlecase = personName
    .split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(' ');
console.log("Name in lowercase:", lowercase);
console.log("Name in uppercase:", uppercase);
console.log("Name in titlecase:", titlecase);
