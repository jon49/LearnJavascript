var thePlan =
      ["############################",
       "#      #    #      o      ##",
       "#                          #",
       "#          #####           #",
       "##         #   #    ##     #",
       "###           ##     #     #",
       "#           ###      #     #",
       "#   ####                   #",
       "#   ##       o             #",
       "# o  #         o       ### #",
       "#    #                     #",
       "############################"];
function Dictionary(startValues) {
  this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
  this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
  return this.values[name];
};
Dictionary.prototype.contains = function(name) {
  return Object.prototype.hasOwnProperty.call(this.values, name) &&
    Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
  forEachIn(this.values, action);
};
// Ex. 8.1
function Point(x, y){
    //this.point = {x: x, y: y};
    this.x = x;
    this.y = y;
}
Point.prototype.add = function(point){
    return new Point(point.x + this.x, point.y + this.y);
};
Point.prototype.isEqualTo = function (point){
    return (point.x === this.x && point.y === this.y);
};
// Book code.
function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}
Grid.prototype.valueAt = function(point) {
  return this.cells[point.y * this.width + point.x];
};
Grid.prototype.setValueAt = function(point, value) {
  this.cells[point.y * this.width + point.x] = value;
};
Grid.prototype.isInside = function(point) {
  return point.x >= 0 && point.y >= 0 &&
         point.x < this.width && point.y < this.height;
};
Grid.prototype.moveValue = function(from, to) {
  this.setValueAt(to, this.valueAt(from));
  this.setValueAt(from, undefined);
};
// Ex. 8.2
/*Grid.prototype.each = function(func){
    function switchPoint(el, index){
        var x = index % this.width;
        var y = (index - x)/this.width;
        var pt = new Point(x, y);
        return func(pt, el);
    }
    this.cells.forEach(switchPoint);
};*/
Grid.prototype.each = function(action){
    for (var y = 0; y < this.height; y++){
        for (var x = 0; x < this.width; x++){
            var pt = new Point(x, y);
            action(pt, this.valueAt(pt));
        }
    }
};
//
var directions = new Dictionary(
  {"n":  new Point( 0, -1),
   "ne": new Point( 1, -1),
   "e":  new Point( 1,  0),
   "se": new Point( 1,  1),
   "s":  new Point( 0,  1),
   "sw": new Point(-1,  1),
   "w":  new Point(-1,  0),
   "nw": new Point(-1, -1)});
function StupidBug() {}
StupidBug.prototype.act = function(surroundings) {
  return {type: "move", direction: "s"};
};
var wall = {};

function Terrarium(plan) {
  var grid = new Grid(plan[0].length, plan.length);
  for (var y = 0; y < plan.length; y++) {
      var line = plan[y];
      for (var x = 0; x < line.length; x++) {
            grid.setValueAt(new Point(x, y),
            elementFromCharacter(line.charAt(x)));
          }
    }
  this.grid = grid;
}

function elementFromCharacter(character) {
  if (character == " ")
    return undefined;
  else if (character == "#")
    return wall;
  else if (character == "o")
    return new StupidBug();
}
wall.character = "#";
StupidBug.prototype.character = "o";

function characterFromElement(element) {
  if (element === undefined)
    return " ";
  else
    return element.character;
}
// Ex. 8.3
Terrarium.prototype.toString = function(){
    var stringArray = [];
    var endOfLine = this.grid.width - 1;
    function createString(point, value){
        stringArray.push(characterFromElement(value));
        if (point.x === endOfLine)
            stringArray.push("\n");
    }
    this.grid.each(createString);
    return stringArray.join("");
};
// Ex. 8.4
function bindMethod(method, object){
    return function (){
        return object[method].apply(object, arguments);
    };
}























