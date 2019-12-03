// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(array) {
  const winner = array.find(function(o) {
    return o.result === "W";
  });
  return winner && winner.year;
}