var twosum = function(nums, target){
  const targets = new Map()

  for(let i = 0; i < nums.length; i++ ){
    let complement = target - nums[i]
    if(targets.get(complement) != i && targets.get(complement) != undefined){
       return [targets.get(complement), i] 
    } 
    targets.set(nums[i], i)
  }
};
let nums = [3,3]
  
let target = 6

console.log(twosum(nums, target))
