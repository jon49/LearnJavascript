// Chapter 6 - Functional Programming (Yay!)
// Ex. 6.1a
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
function reduce(combine, base, array) {
  forEach(array, function (element) {
      base = combine(base, element);
    });
  return base;
}
function countZeroes(numbers) {
    function countZero (previous, num) {
        if(num === 0)
           return previous++;
        return previous;
    }
    return reduce(countZero, 0, numbers);
}
// Text 6.1a
show(countZeroes([1, 2, 3, 0, 4, 0, 5]));

// Ex. 6.1b
function count(array, func) { 
    var accumulator = 0;
    for (var num in array) { 
            if (func(array[num]))
                accumulator++;
        } 
    return accumulator;
}
function countZeroes(numbers) { 
    function isZero(num) { return (num === 0);}
    return count(numbers, isZero);
}
// Ex. 6.1b
show(countZeroes([1, 2, 3, 0, 4, 0, 5]));

// Ex. 6.2
function processParagraph(paragraph) {
    if (paragraph.charAt(0) === "%") {
        var startParagraph = paragraph.indexOf(" ") + 1;
        var slicedContent = paragraph.slice(startParagraph);
        var header = "h" + String(startParagraph - 1);
        return {content: slicedContent, type: header};
    }
    return {content: paragraph, type: "p"};
}
// Test 6.2
show(processParagraph("%% This is a header paragraph!"));
show(processParagraph("This isn't a header paragraph!"));

// Ex. 6.3 -> Possibly a good candidate for RPN?
function indicesOf(searchValues, string) {
    return function indicesFrom(fromIndex) {
            function getIndex(index, character) {
                        var newIndex = string.indexOf(character, fromIndex);
                        return ((index < newIndex || newIndex === -1) ? index : newIndex);
                    }
            var result = searchValues.reduce(getIndex, string.length);
            return (result === string.length) ? -1 : result;
        };
}
function getIndices(searchValues, string){
    var searchIndices = indicesOf(searchValues, string);
    var indicesResult = [];
    var index = 0;
    while (index > -1){
        index = searchIndices(index);
        if (index > -1){
            indicesResult.push(index);
            index++;
        }
    }
    return indicesResult;
}
function splitParagraph(paragraph) {
    //Get break points in paragraph.
    var searchTerms = ["*", "{", "}"];
    var foundIndices = getIndices(searchTerms, paragraph);
    foundIndices.unshift(-1, foundIndices[0]);
    foundIndices.push(foundIndices[foundIndices.length - 1], paragraph.length);
    //Get paragraph slices
    var paragraphSlices = [];
    function sliceParagraph(value, index){
        var slice = paragraph.slice(value + 1, foundIndices[index + 1]);
        var normalType = "p";
        if (index % 2 === 0) {
            var sliceTypeIndex = searchTerms.indexOf(paragraph.charAt(value));
            var endSliceTypeIndex = searchTerms.indexOf(paragraph.charAt(foundIndices[index + 1]));
            var sliceType = (sliceTypeIndex > -1) && (endSliceTypeIndex > -1) ? searchTerms[sliceTypeIndex] : normalType;
            if (slice)
                paragraphSlices.push({type: type, content: slice});
        }
        else {
            if (slice)
                paragraphSlices.push({type: normalType, content: slice});
        }
    }
    foundIndices.forEach(sliceParagraph);
    return paragraphSlices;
}
// Test 6.3 -> indicesOf
var p = "This *is* a smart{Debateable} paragraph.";
var pSearch = ["*", "{", "}"];
var pIndices = indicesOf(pSearch, p);
var array = [];
var index = 0;
var counter = 0;
while (index > -1) { 
    counter++;
    index = pIndices(index);
    if (index > -1) { 
            array.push(index);
            index++;
        } 
    if (counter > 5)
      index = -1;
}
show(array);
// Test -> splitParagraph
show(splitParagraph(p));
var ps = ["This *is* a smart{Debateable} paragraph.", "*This is* a smart{Debateable} paragraph.", "This *is* a smart paragraph.{Debateable}"];
function test63(p) {
    show(splitParagraph(p));
}
ps.forEach(test63);

// Ex. 6.4
function tag(name, content, attributes) {
    return {name: name, attributes: attributes, content: content};
}
function createTag(tagObject){
    var attributesString = "";
    for (var attrKey in tagObject.attributes){
        attributesString = " " + attrKey + "=\"" + tagObject.attributes[attrKey] + "\"";
    }
    return "<" + tagObject.name + " " + attributesString + ">" + tagObject.content + "</" + tagObject.name + ">";
}
function image(location){
    var imgTag = tag("img", "", {src: location});
    return createTag(imgTag);
}
// Test 6.4
show(image("../images/myImage.png"));

// Ex. 6.5
var paragraphObjectHeader = [{type: "h3", content:"Great!"}];
var paragraphObject = [{type: "normal", content: "This "}, {type: "emphasised", content: "is"}, {type: "normal", content: " a smart"}, {type: "footnote", content: "Debateable."}, {type: "normal", content: " paragraph."}];
function renderFragment (fragment) {
    
}































