var merge = function(nums1, m, nums2, n) {
  let endp1 = m-1
  let endp2 = n-1
  let endPointer = nums1.length-1

  while(endp2>=0){
   if(end1 >=0 && nums1[endp1]>nums2[endp2]){
     nums1[endPointer]=nums1[endp1]
     endPointer--
     endp1--
   } 
    else{
      nums1[endPointer] =  nums2[endp2]
      endpointer--
      endp2--
    }
  }
  return(nums1)
};

let num1 = [1,2,3,0,0,0]
let m = 3
let num2 = [2,5,6]
let n = 3

comsole.log(merge(num1,m,num2,n))