// Ex. 13.1
function registerEventHandler(node, event, handler){
    if ("addEventListener" in node)
        node.addEventListener(event, handler, false);
    else
        node.attachEvent("on" + event, handler);
}
// Ex. 13.2
Square.prototype.moveContent = function(toSquare){
    toSquare.content = this.content;
    this.content = null;
    toSquare.background = this.background;
    target.tableCell.appendChild(this.tableCell.lastChild);
};
Square.prototype.clearContent = function(){
    this.content = null;
    removeElement(this.tableCell.lastChild);
};
