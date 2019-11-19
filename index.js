const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
let result =  array.find(e =>{
    if(e["result"] === "W"){
      return e
    }
  })
  if(result){return result.year}
}