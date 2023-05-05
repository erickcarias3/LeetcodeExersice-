var levelOrder = function(root){

  let returnArray = []
  
  if(root.length === 0){
    return []
  }

  let rootP = 1
  returnArray = [[root[rootP]]]
  let levelArray = []
  levelPointer = 0
  
  while(rootP<root.length){
    if(root[rootP] != null){
      levelArray.add(root[p])

    }

    if(levelPointer === 2){
      levelPointer = 0
      returnArray.add(levelArray)
    }
    else{
      levelPointer++
    }

  }
  return returnArray
}

let root =[1]
levelOrder(root)