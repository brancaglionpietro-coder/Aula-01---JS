function mostrar(){
    var texto = document.getElementById('i1').value 
    var cor = document.getElementById('i2').value 
    var data = document.getElementById('i3').value
    var check = document.getElementById('i4').checked

    var printTexto = document.getElementById('printTexto')
    var printCor = document.getElementById('printCor')
    var printData = document.getElementById('printData')
    var printCheck = document.getElementById('printCheck')

    // printTexto.textContent = "O nome digitado foi:" + texto
    printTexto.textContent = `O texto digitado foi: ${texto}`
    printCor.innerHTML = `A cor escolhida foi: ${cor}`
    printData.innerText = `A data escolhida foi: ${data}`
    printCheck.textContent = `Você tem aids? ${check}`

    // console.log(texto, typeof texto)

}