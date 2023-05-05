var generate = function(numRows) {
    if(numsRows = 1){
        return [[1]]
    }

    let returnArray = [[1]]
    
    let snapshot = 0

    for(let i = 1; i < numRows; i++){
        let temp = [1]
        for (let k = 0; k < i; k++)
          temp.push(returnArray[snapshot][k] + returnArray[snapshot][k+1])
        }
        temp.push(1);
        returnArray.push(temp)
        j++
    }

    return returnArray
}

generate(1)