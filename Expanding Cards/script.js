const items = document.querySelectorAll('.item')
let activeElement = document.querySelector('.active')

items.forEach(item =>
  item.addEventListener('click', () => {
    activeElement.classList.remove('active')
    item.classList.add('active')
    activeElement = item
  })
)
