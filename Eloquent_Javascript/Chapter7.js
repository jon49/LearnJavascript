// Ex. 7.1
var roads = {};
function makeRoad(from, to, length) {
  function addRoad(from, to) {
      if (!(from in roads))
        roads[from] = [];
      roads[from].push({to: to, distance: length});
    }
  addRoad(from, to);
  addRoad(to, from);
}
function makeRoads(from, destinations) {
    function makeARoad (toLength){
        makeRoad(from, toLength[0], toLength[1]);
    }
    destinations.forEach(makeARoad);
}
// Test 7.1
makeRoads("Point Kiukiu", [["Hanaiapa", 19], ["Mt Feani", 15], ["Taaoa", 15]]);
show(roads);

// Ex. 7.2
function filter(test, array){
    var result = [];
    function getTrueValues(value){
        if (test(value))
            result.push(value);
    }
    array.forEach(getTrueValues);
    return result;
}
// Test 7.2
function testFilter(value){
    return (value > 5);
}
show(filter(testFilter, [1, 2, 6, 3, 7]));

// Ex. 7.3
function shortestRoute(from, to){
    var routes = possibleRoutes(from, to);
    var shortestRouteLength = Math.min.apply(null, routes.map(function (route){
        return Number(route.length);
    }));
    function equals(route) {
        return shortestRouteLength === route.length;
    }
    return routes.filter(equals);
}

// Ex. 7.4
function point(x, y){
    return {x: x, y: y};
}
function addPoints(a, b){
    return point(a.x + b.x, a.y + b.y);
}
function possibleDirections(origin){
    var possiblePoints = [point(-1, -1), point(-1, 0), point(-1, 1), point(0, -1), point(0, 1), point(1, -1), point(1, 0), point(1, 1)];
    var newPoints = possiblePoints.map(addPoints.bind(undefined, origin));
    return newPoints.filter(function (toFilterPoint){
        return toFilterPoint.x > -1 && toFilterPoint.x < 20 && toFilterPoint.y > -1 && toFilterPoint.y < 20;
    });
}
// Test 7.4
[point(0, 0), point(19, 19), point(1,1)].map(possibleDirections).forEach(show);


















