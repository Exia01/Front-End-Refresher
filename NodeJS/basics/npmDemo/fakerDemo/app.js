var faker = require('faker');
let totalLineItems = 10;

console.log('======================');
console.log(' WELCOME TO MY SHOP! ');
console.log('======================');
for (let i = 0; i < totalLineItems; i++) {
  console.log(faker.fake('{{commerce.productName}} - ${{commerce.price}}'));
}
