document.addEventListener("mousemove", function (event) {
  const x = event.pageX
  const y = event.pageY
 
  document.querySelectorAll("span").forEach(div => {
		const dx = (div.offsetLeft) - x
    const dy = (div.offsetTop) - y
    const dist = Math.sqrt(dx * dx + dy * dy)
    
    const score = Math.exp(dist * -0.003)
    
    div.style.transform = "scale(" + score + ")"
    div.style.fontWeight = 100 + (100 * Math.floor(8 * score))
  })
})