// Chapter 4
// Ex. 4.1
var catNames = {"Jolly": "1st", "Good": "2nd", "Cat": "3rd", "Name": "4th"};
catNames["Jimmy Jones"] = "Added new cate name.";
delete catNames["Jolly"];
var isCatName = ("George" in catNames);

// Ex. 4.2
function range(posNumber) {
    var result = [];
    for (var index = 0; index <= posNumber; index++)
        result[index] = index;
    return result;
}
// Test 4.2
show(range(5));

// Ex. 4.3
var array = [" ", "test "];
var newArray = array.join(" ").split(" ");
// Test 4.3
show(newArray);

// Ex. 4.4
function startsWith (paragraph, inParagraph) {
    return (paragraph.slice(0, inParagraph.length).toUpperCase() === inParagraph.toUpperCase());
}
// Test 4.4
show(startsWith("This is a test.", "this")); //true
show(startsWith("This is a test.", "Not")); //false

// Ex. 4.5
function catNames(paragraph) {
    var colon = paragraph.indexOf(":");
    if (colon > -1) {
        var result = paragraph.slice(colon + 1).split(",");
        for (var i = 0; i < result.length; i++)
            result[i] = result[i].trim();
        return result;
    } 
    return [];
}
// Test 4.5
show(catNames("These are the cate names:George, Harry, Smelly"));

// Ex. 4.6
function extractDate (paragraph) {
    var end = paragraph.indexOf(":");
    var parsedDate = paragraph.slice(5, end).split("/");
    return new Date(parsedDate[2], parsedDate[1] - 1, parsedDate[0]);
}
// Test 4.6
show(extractDate("died 27/04/2006: Black Leclere"));

// Ex. 4.7
function between (string, startsWith, endsWith) {
    var start = string.indexOf(startsWith) + startsWith.length;
    var end = string.indexOf(endsWith, start);
    return string.slice(start, end);
}
// Test 4.7
show(between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"));
show(between("bu ] boo [ bah ] gzz", "[ ", " ]"));

// Ex. 4.8
function prependIf (format, item) {
    var stringItem = String(item);
    var difference = format.length - stringItem.length;
    if (difference > 0)
        return (format.slice(0, difference) + stringItem);
    return stringItem;
}
function formatDate(date) {
    var month = prependIf("00", String(date.getMonth() + 1));
    var day = prependIf("00", date.getDate());
    return day + "/" + month + "/" + date.getFullYear();
}
// Test 4.8
var newDate = new Date(2009, 0, 3);
show(formatDate(newDate));

// Ex. 4.9
function catRecord(name, birthdate, mother) {
  return {name: name, birth: birthdate, mother: mother};
}
var cats = {"Spot": new catRecord("Spot", new Date(1997, 2, 5), "unknown"), 
            "George": new catRecord("George", new Date(2000, 2, 6), "Spot")};
function oldestCat(listOfCats) {
    var theOldestCat = new catRecord("The Oldest Cat", Date.now(), "N/A");
    for (var catName in listOfCats) {
        var cat = listOfCats[catName];
        if (cat.birth < theOldestCat.birth)
            theOldestCat = cat;
    }
    return theOldestCat.name;
}
// Test 4.9
show(cats);
show(cats["Spot"].birth);
show(oldestCat(cats));

// Ex. 4.10
function range(upto) {
  var result = [];
  var start = 0;
  if (arguments.length > 1) {
      start = arguments[0];
      upto = arguments[1];
  }
  for (var i = start; i <= upto; i++)
    result[i] = i;
  return result;
}
// Redo!
function range(upto) {
  var result = [];
  var start = 0;
  if (arguments.length > 1) {
      start = arguments[0];
      upto = arguments[1];
  }
  for (var i = start; i <= upto; i++)
    result.push(i); //Need to use push otherwise 0 to start (exclusive) will be "undefined"
  return result;
}
// Test 4.10;
show(range(4));
show(range(3,4));

// Ex. 4.11
function sum (numbers) {
    var total = 0;
    for (i in numbers)
        total += Number(numbers(i));
    return total;
}
// Test 4.11
print(sum(range(1, 10)));



