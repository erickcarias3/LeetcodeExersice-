var intersect = function(nums1, nums2){
  const count = new Map()

  for(let i = 0; i < nums1.length ; i++){
    if(count.get(nums[i]) === undefined){
      count.set(nums[i],1)
    }
    else{
      let addNum = count.get(nums[i]) + 1
      count.set(nums[i], addNum)
    }
  }
  return count
}

let nums1 = [1,2,2,1]
let nums2 = [2,2]

console.log(intersect(nums1,nums2))