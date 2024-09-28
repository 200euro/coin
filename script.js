const coin = document.querySelector ('#coin')
const scoreEL = document.querySelector ('#score')
const buyUpgradebtn = document.querySelector ('#buyUpgrade')

let score = 0
let clickValue = 1
let upgradeCost = 100

coin.addEventListener ('click', () => {
   score = score + clickValue 
   scoreEL.innerText = score
})

buyUpgradebtn.addEventListener('click', () =>{
   if( score > upgradeCost){
      score = score - upgradeCost
      clickValue = clickValue +1 
      upgradeCost = upgradeCost *2
      buyUpgradebtn.innerText = `Купить улучшения ${upgradeCost}` 
   }
})