// Chapter 10: Regular Expressions
// Ex. 10.1
var forDate = /\d{2}\/\d{2}\/\d{4}/;
//Test
show("born 15/11/2003 (mother Spot): White Fang".search(forDate));
// Ex. 10.2
var forEMailAddress = /\b[\w-.]+@[\w-.]+\.\w{2,3}\b/;
// Test
show("n.jon-e-mail@gm.com".search(forEMailAddress));
show("n.jon-e-mail@gm.co".search(forEMailAddress));
show("n.jon-e-ma%il@gm.co".search(forEMailAddress));
// Ex. 10.3
function extractDate(string){
    var forDate = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/;
    var dateComponents = string.match(forDate);
    if (dateComponents !== null)
        return new Date(dateComponents[3], Number(dateComponents[2]) - 1, dateComponents[1]);
}
// Test 10.3
show(extractDate("died 27/04/2006: Black Leclère"));
// Ex. 10.4
function escapeHTML(text){
    var toEscape = {"&": "&amp;",
                    "\"": "&quot;",
                    "<": "&lt;",
                    ">": "&gt;"};
    function toHTML(match, escapeCharacter){
      return toEscape[escapeCharacter];
    }
    return text.replace(/([&"<>])/g, toHTML);
}
// Test 10.4
print(escapeHTML("Hi! My friend & I said \"5 < 6 or 6 > 5?\""));
















