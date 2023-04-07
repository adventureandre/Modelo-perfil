function toggleMode() {
  const html = document.documentElement
  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  } 
  else {
    html.classList.add('light')
  }*/
  html.classList.toggle('light')

  const img= document.querySelector("#profile img")
  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de André Luiz')
  }
  else{
    img.setAttribute('src', './assets/avatar.png')}

}



var nome = document.querySelector('.js_nome')
var texto = nome.innerHTML
var index = 0

const escrever = () => {
    nome.innerHTML = nome.innerHTML.replace('|', '')

    if (texto.length > index) {
        if (index === 0) {
            nome.innerHTML = texto.charAt(index)
        } else {
            nome.innerHTML += texto.charAt(index)
        }

        nome.innerHTML += '|'

        index++
        setTimeout(escrever, 180)
    }
}

escrever()
