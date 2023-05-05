var pivotIndex = function(nums) {
  leftSum = 0
  rightSum = 0

  for( let i = 1; i < nums.length; i++){
    rightSum = nums[i]  + rightSum
  }

  for( let i = 0; i < nums.length; i++){
    if(leftSum === rightSum){
      return i
    }
    leftSum = nums[i] + leftSum

    let y = i + 1
    
    if(nums[y] === undefined){
      if(leftSum === rightSum){
        return i
      }
    }
    else{
      
      rightSum = rightSum - nums[y]
    }

  }

  return -1
  
};

let nums = [-1,-1,-1,1,1,1]
console.log(pivotIndex(nums))