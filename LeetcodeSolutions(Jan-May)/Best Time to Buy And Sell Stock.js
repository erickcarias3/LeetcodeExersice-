var maxProfit = function(prices){
  let profit = 0
  for(let i = 0; i < prices.length; i++){
    profit = profit + prices[i]
  }
  if(profit<0){
    return 0
  }
  return profit
}

