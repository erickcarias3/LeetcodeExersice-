var matrixReshape = (mat, r,c) => {
  let rows = mat.length
  let columns = mat[0].length

  if((columns*rows) != (r * c)){
    return mat
  }

  let outputArray = [[]]
  let row_num = 0
  let col_num = 0

  for(let i=0; i<rows; i++){
    for(let j=0; j < columns; j++){
      outputArray[row_num][col_num] = mat[i][j]
      col_num++
      console.log("colnum= " + col_num)
      console.log("C value= " + c)
      if(col_num === c){
        col_num = 0
        row_num++
      }
    }
  }
  return outputArray
}

let mat = [[1,2],[3,4]]
let r = 1
let c = 4

console.log(matrixReshape(mat,r,c))