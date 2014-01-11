// Chapter 2 Excercises

//Ex. 3.1
function absolute(number) {
    if (number < 0)
        return -number;
    return number;
}
// Test 3.1
print(absolute(-5));
print(absolute(0));
print(absolute(5));

// Ex. 3.2
function greaterThan(testNumber) {
    return function(number) {
        return (number > testNumber);
    };
}
// Test
var isGreaterThan5 = greaterThan(5);
print(isGreaterThan5(6));
print (isGreaterThan5(4));
print (isGreaterThan5(5));
