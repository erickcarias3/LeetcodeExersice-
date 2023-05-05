

const rotate = (nums, k) => {
  let startP = 0;
  let endP = nums.length - k

  while(startP < nums.length - k){
    let swapVar = nums[startP]
    nums[startP] = nums[endP]
    nums[endP] = swapVar
    
    startP++
    endP++
    if(endP > nums.length-1){
      endP = nums.length-k
    }
  }
}

let nums= [1, 2, 3, 4, 5, 6, 7, 8, 9]
//rotate(nums)
console.log(nums)


module.exports(rotate)