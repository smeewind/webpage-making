const circles = document.querySelectorAll('.circle')

let i = 0
const unit = (1 / (circles.length - 1)) * 96

const progressListener = () => (progress.style.width = `${unit * i}%`)

prev.addEventListener('click', () => {
  next.disabled = false
  circles[i--].classList.remove('active')
  progressListener()
  if (i === 0) prev.disabled = true
})

next.addEventListener('click', () => {
  prev.disabled = false
  circles[++i].classList.add('active')
  progressListener()
  if (i === circles.length - 1) next.disabled = true
})
