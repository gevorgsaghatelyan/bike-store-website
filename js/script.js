window.addEventListener('resize', resize)

function resize() {
  const myWidth = window.innerWidth
  const size = document.querySelector('#size')
  size.innerText = `Width: ${myWidth}px`
}

console.log(size)