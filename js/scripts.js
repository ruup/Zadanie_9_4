var a = 0;
var b = 0;
var value = (a * a) + (2 * a * b) - (b * b);
console.log( 'Wynik to: '+ a +  + b + + value);

if (value > 0) {
 	console.log('Twój wynik jest dodatni');
 } else if (value < 0) {
 	console.log('Twój wynik jest ujemny')
 } else {
 	console.log('Twój wynik to zero')
 }
