const best = (stocksArry) =>{
    let buyPrice = stocksArry[0]
    let profit = 0
    for (let i = 0; i < stocksArry.length;i++){
         if (stocksArry[i] < buyPrice){
            buyPrice = stocksArry[i]
         }
         let difference = stocksArry[i] - buyPrice
         if(difference > profit){
            profit = difference
         }
     }
     return profit
}

console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([1, 2, 3, 4, 5]))// 4 - buy at $1, sell at $5
console.log(best([2, 3, 10, 6, 4, 8, 1]))// 8 - buy at $2, sell at $10
console.log(best([7, 9, 5, 6, 3, 2]))// 2 - buy at $7, sell at $9
console.log(best([0, 100]))// 100 - buy at $0, sell at $10
console.log(best([5, 4 , 3, 2, 1]))// 0
console.log(best([100]))// 0
console.log(best([100, 0]))// 0