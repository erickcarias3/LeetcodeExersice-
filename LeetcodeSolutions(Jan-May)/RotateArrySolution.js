const reverse = (nums, int i, int j) => {
  let li = i;
  let ri = j;
  while(li < ri){
    let temp = nums[li]
    nums[li] = nums[ri]
    nums[ri] = temp;
    li++;
    ri--;
  }
}

const rotate = (nums, k) => {
  reverse(nums, 0, nums.length-k-1)
  reverse(nums, nums.length -k, nums.length-1)
  reverse(nums, 0, nums.length-1)
}

let nums= [1, 2, 3, 4, 5, 6, 7, 8, 9]
rotate(nums)
console.log(nums)