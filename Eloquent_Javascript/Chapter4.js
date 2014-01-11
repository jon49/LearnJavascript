// Chapter 4
// Ex. 4.1
var catNames = {"Jolly": "1st", "Good": "2nd", "Cat": "3rd", "Name": "4th"};
catNames["Jimmy Jones"] = "Added new cate name.";
delete catNames["Jolly"];
var isCatName = ("George" in catNames);
