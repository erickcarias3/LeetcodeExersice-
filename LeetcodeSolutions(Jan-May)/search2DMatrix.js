var searchMatrix = function(matrix, target) {
  let centerP = Math.floor(matrix.length / 2)
  let isGreaterThan = false
  let targetFound = false

  function updateCounter() {
    if (isGreaterThan) {
      centerP++
    }
    else {
      centerP--
    }
  }

  
  if (matrix[centerP][(matrix[centerP].length - 1)] < target) {
    isGreaterThan = true
    centerP++
  }

  while (centerP < matrix.length && centerP > -1) {
    for (let i = matrix[centerP].length - 1; i > -1; i--) {
      if (target === matrix[centerP][i]) {
        targetFound = true
        return (targetFound)
      }

      if (i === 0) {
        updateCounter()
      }
    }
  }

  return targetFound
};

let matrix = [[-8,-8,-7,-7,-6,-5,-3,-2],[0,0,1,3,4,6,8,8],[11,12,14,16,18,18,19,19],[22,23,25,27,28,30,30,31],[34,35,37,39,40,42,43,45],[48,50,51,51,53,54,55,57],[58,60,62,62,62,63,63,65],[68,69,71,72,72,72,74,76]]
let target = 76

console.log(searchMatrix(matrix, target))