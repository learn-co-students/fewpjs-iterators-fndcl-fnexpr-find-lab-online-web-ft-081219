const testVar = {}

function superbowlWin(array) {
  let win = array.find(record => record.result === 'W')
  if (win) {
    return win.year;
  }
  
}

