// 1. increament a number by 1 with as many different ways as you can

let add = 1;

add++;
++add;
add += 1;
add = add + 1;
add;

// 2. decreament a number by 1 with as many different ways as you can

let sub = 1;

sub--;
--sub;
sub -= 1;
sub = sub - 1;
sub;

// 3. convert the number 20 to a string with as many different ways as you can

const strOne = 20 + "";
const strTwo = `${20}`;
const strThree = String(20);

// 4. convert "20.5" to a number with as many different ways as you can

let numOne = parseInt("20.5");
let numTwo = parseFloat("20.5");
let numThree = Number("20.5");

// 5. multiply a number by a sting with a value of "20" using compound operator

let number = 10;

number *= parseInt("20");
number *= +"20";
number;
