// print out and add new line
print("a\nb");

// Determine type of variable/constant
typeof(4.5);

// Concatenation
print("con" + "cat" + "nate");

// String comparison based on unicode values. So "Z" < "a" is true.
// Not use '!=', equivalent use '==', AND use '&&', or '||'.

// Variables declared
var caught = 5 * 5;

// Message box written with alert function.
alert("Avocados");

// Math
alert(Math.min(2, 4));

// Prompt
prompt("Pick a number", "5");

var theNumber = Number(prompt("Pick a number", ""));
print("Your quared number is:" + theNumber*theNumber);

// Print numbers 0 to 12 (even only)
var index = 0;
while (index <= 12) {
    print(index);
    index += 2;
}

// Ex. 2.2
var index = 1;
var result = 1;
while (index <= 10) {
    result *= 2;
    index += 1;
}
print(String(result));

// Ex. 2.3
var pound = "#";
var index = 0;
var result = "";
while (index < 10) {
    result = result + pound + "\n";
    index += 1;
    pound += "#";
}
print(result);

// a real for loop!
for (var index = 0; index <= 12; index += 2)
    print(index);

// Ex. 2.4
var result = 1;
for (var index = 1; index <= 10; index += 1)
    result *= 2;
print(result);

var result = "";
var pound = "";
for (var index = 0; index < 10; index += 1) {
    pound += "#";
    result = result + pound + "\n";
}
print(result);

// Ex. 2.5
var answer = Number(prompt("What is the value of 2 + 2?", ""));
if (answer == 4)
    print("Yippee!");
else if (answer == 3 || answer == 5)
    print("Almost!");
else
    print("Not even close!");

// Ex. 2.6
var answer = 0;
while (answer !=4) 
    answer = Number(prompt("What is the value of 2 + 2?", ""));

