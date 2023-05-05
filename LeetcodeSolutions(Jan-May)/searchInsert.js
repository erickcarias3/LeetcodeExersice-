var searchInsert = function(nums, target) {
  let first = 0
  let last = nums.length - 1
  while (first < last) {
    let mid = first + Math.floor((last - first + 1) / 2)
 
    if (target < nums[mid]) {

      last = mid - 1
    }
    else {
      first = mid
    }
  }
    if(target > nums[first]){
    return first + 1
    }
    else{
        return first 
    }
};
let nums = [1,3,5,6]
let target = 5

searchInsert(nums, target)