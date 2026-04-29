function somar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var resp = document.getElementById("resposta")
    resp.textContent = n1 + n2
}
function subtrair(){
    var n3 = document.getElementById("n3").valueAsNumber
    var n4 = document.getElementById("n4").valueAsNumber
    var resp = document.getElementById("respsub")
    resp.textContent = n3 - n4
}
function multiplicar(){
    var n5 = document.getElementById("n5").valueAsNumber
    var n6 = document.getElementById("n6").valueAsNumber
    var resp = document.getElementById("respmult")
    resp.textContent = n5 * n6
}
function dividir(){
    var n7 = parseFloat(document.getElementById("n7").value)
    var n8 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respdiv")

    if(n8 !== 0){
         resp.textContent = n7 / n8
    }else{
        resp.textContent = "Não se divide por 0"
    }
}