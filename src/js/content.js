import '../css/content.css'

console.log('MEAL DEALS')

const priceNodes = document.querySelectorAll('.a-color-price')

for (let node of priceNodes) {
  let match = node.textContent.match(/£(\d+.\d\d)/)
  if (match) {
    let price = Number(match[1])
    let mealDeals = Math.floor(price / 3)
    node.textContent = `£${price} or ${mealDeals} Tesco Meal Deal${mealDeals > 1 ? 's' : ''}`
  }
}
