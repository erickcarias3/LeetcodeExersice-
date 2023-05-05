const removeDuplicates = (nums) => {
  let index = 0;
  let duplicate = false;
  let beginP = 0;
  let endP = 0;

  while (endP <= nums.length) {
    if (nums[beginP] === nums[endP]) {
      duplicate = true
      endP++
    }
    else if (duplicate) {
      index++
      nums[index] = nums[endP]
      beginP = endP
      endP++
    }
    else {
      index++
      beginP = endP
      endP++
    }
  }

  return index;
};

let nums = [4, 5, 5, 6, 7, 7, 7]
let test = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
unique = removeDuplicates(test)
console.log(test)
console.log(unique)