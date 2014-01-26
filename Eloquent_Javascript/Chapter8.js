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
//
Terrarium.prototype.listActingCreatures = function() {
  var found = [];
  this.grid.each(function(point, value) {
      if (value !== undefined && value.act)
        found.push({object: value, point: point});
    });
  return found;
};
// Ex. 8.5
Terrarium.prototype.listSurroundings = function(center){
    var arroundCenter = {};
    var grid = this.grid;
    function surroundings(point, value){
        var byCenter = center.add(point);
        if (grid.isInside(byCenter))
            arroundCenter[point] = (characterFromElement(byCenter));
        else
            arroundCenter[point] = "#";
    }
    directions.each(surroundings);
    return arroundCenter;
};
//
Terrarium.prototype.processCreature = function(creature) {
  var surroundings = this.listSurroundings(creature.point);
  var action = creature.object.act(surroundings);
  if (action.type == "move" && directions.contains(action.direction)) {
      var to = creature.point.add(directions.lookup(action.direction));
      if (this.grid.isInside(to) && this.grid.valueAt(to) === undefined)
        this.grid.moveValue(creature.point, to);
    }
  else {
      throw new Error("Unsupported action: " + action.type);
    }
};
Terrarium.prototype.step = function() {
  forEach(this.listActingCreatures(),
          bind(this.processCreature, this));
  if (this.onStep)
    this.onStep();
};
Terrarium.prototype.start = function() {
  if (!this.running)
    this.running = setInterval(bind(this.step, this), 500);
};
Terrarium.prototype.stop = function() {
  if (this.running) {
    clearInterval(this.running);
    this.running = null;
  }
};
var creatureTypes = new Dictionary();
creatureTypes.register = function(constructor) {
  this.store(constructor.prototype.character, constructor);
};
function elementFromCharacter(character) {
  if (character == " ")
    return undefined;
  else if (character == "#")
    return wall;
  else if (creatureTypes.contains(character))
    return new (creatureTypes.lookup(character))();
  else
    throw new Error("Unknown character: " + character);
}
function BouncingBug() {
  this.direction = "ne";
}
BouncingBug.prototype.act = function(surroundings) {
  if (surroundings[this.direction] != " ")
    this.direction = (this.direction == "ne" ? "sw" : "ne");
  return {type: "move", direction: this.direction};
};
BouncingBug.prototype.character = "%";
creatureTypes.register(BouncingBug);
// Ex. 8.6
function DrunkBug(){}
DrunkBug.prototype.act = function(surroundings){
    var randomDirection = surroundings[Math.floor(Math.random()*surroundings*(surroundings.length - 1))];
    return {type: "move", direction: randomDirection};
};
var terrarium = new Terrarium(thePlan);
terrarium.onStep = partial(inPlacePrinter(), terrarium);
terrarium.start();

















