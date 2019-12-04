const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find(object => object.result === "W")
  if (win) {
    return win.year
  }
}