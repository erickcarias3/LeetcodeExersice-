var firstUniqChar = function(s) {
  var map = new Map()

  for(let i = 0; i < s.length; i++){
    if(map.get(s[i]) != undefined){
      let increment = map.get(s[i])
      increment++
      map.set(s[i],increment)
    }
    else{
      map.set(s[i],0)
    }
  }

  for(let i = 0; i < s.length; i++){
    if(map.get(s[i]) === 0){
      return i
    }
  }
  return -1
};

let s = "leetcode"

firstUniqChar(s)