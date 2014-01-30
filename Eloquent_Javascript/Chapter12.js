// Ex. 12.1
function escapeHTML(text) {
  var replacements = {"<": "&lt;", ">": "&gt;",
                      "&": "&amp;", "\"": "&quot;"};
  return text.replace(/[<>&"]/g, function(character) {
    return replacements[character];
  });
}
/*var nodes = [];
function asHTML(node){
    if (isTextNode(node))
        nodes.push(node.nodeValue);
    else
        nodes.push(node.nodeName);
    node.childNodes.forEach(asHTML);
}*/
/*var html = [];
function asHTML(node){
    if(isTextNode(node))
        nodes.push(escapeHTML(node.nodeValue));
    else
        nodes.push("<" + node.nodeName + "/>");
    node.childNodes.forEach(asHTML);
}
var htmlString = html.join("\n");*/
// Ex. 12.2
function removeElement(node){
    var pNode = node.parentNode;
    if (pNode)
        pNode.removeChild(node);
}
// Ex. 12.3
function makeTable(data, headers){
    var headersDom = dom("TR", headers.forEach(function(header){
        return dom("TH", null, header);
    }));
    var dataDom = data.forEach(function(datum){
        return dom("TR", headers.forEach(function(header){
            return dom("TD", null, datum[header]);
        }));
    });
    dom("TABLE", null, 
       dom("TBODY", null, headersDom, dataDom));
}










