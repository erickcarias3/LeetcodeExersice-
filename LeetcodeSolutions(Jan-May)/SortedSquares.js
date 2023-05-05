var sortedSquares = function(nums) {
    sortedPow = []
    start = 0
    end = nums.length-1
    sortedPointer = end
  
    while(sortedPointer > -1){

      if(Math.pow(nums[start],2) > Math.pow(nums[end],2)){
        sortedPow[sortedPointer] = Math.pow(nums[start],2)
        start++
        
      }
      else{
        sortedPow[sortedPointer] = Math.pow(nums[end],2)
        end--
      }

      sortedPointer--
    }
    return sortedPow;
};