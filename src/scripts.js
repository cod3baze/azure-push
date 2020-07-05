const liElement = document.querySelectorAll('aside ul li')
const imgExample = document.querySelectorAll('img#img-example')
const boilerpoite = document.querySelectorAll('div#boilerpoite')

const handleImgView = () => {
  boilerpoite.forEach(point => {
    point.addEventListener('click', () => {
      imgExample.forEach(img => {
        img.classList.toggle('isVisible')
      })
    })
  })
}
handleImgView()

const handleSelect = () => {
  liElement.forEach(element => {
    element.addEventListener('click', (event) => {
      element.classList.toggle('selected')
    })
  })
}
handleSelect()
