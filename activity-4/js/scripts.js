
//welcome message
var salutations = 'Welcome, ';
var name = 'derek';
var message = ' thank you for your interest';
var welcome = salutation + name + message;
// get welcome message element
var el = document.getElementById('greeting');
el.textContent = greeting;
//price var
var price = 20,
  studentDiscount = .10,
 studentPrice = price - (price * studentDiscount);
var elprice = document.getElementById('price');
elprice.textContent = price;
var elstudentPrice = document.getElementById('studentPrice');
elstudentPrice.textContent = studentPrice;
