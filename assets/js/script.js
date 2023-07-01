const items = [...document.querySelectorAll('.card-title')]

const updateCount = (el) => {
  const value = parseInt(el.dataset.value)
  const increment = Math.ceil(value / 1000)
  let initialValue = 0
  const increaseCount = setInterval(() => {
    if (initialValue >= value) {
      clearInterval(increaseCount)
    }
    el.innerText = `$ ${initialValue}+ `
    initialValue += increment
  }, 3)
}
items.forEach((item) => {
  updateCount(item)
})
