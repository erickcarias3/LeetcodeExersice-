var containsDuplicate = (nums) => {
  let set = new Set();
  
  for(let i = 0; (i < nums.length); i++){
    set.add(nums[i]);
    if(set.has(nums[i])){
      return true;
    }
  }
  return false;
}

let nums= [1, 2, 3, 4, 5, 6, 7, 8, 9]
containsDuplicate(nums)