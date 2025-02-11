
document.addEventListener("mousemove", function (cb) {
  let x = cb.clientX
  let y = cb.clientY
  touchIndicator.style.left = `${x}px`
  touchIndicator.style.top = `${y}px`
  touchIndicator.style.transform = 'translate(-50%, -50%)'
})