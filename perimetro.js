function calcularPerimetro() {
    var inRaio = document.getElementById("inRaio")
    var outPerimetro = document.getElementById("outPerimetro")

    var raio = parseFloat(inRaio.value);
    var total = 2* Math.PI * raio

    outPerimetro.textContent = "O Perímetro do raio "+ raio +"cm é: " + total.toFixed(4) +"cm"


}

function calcularDobro() {
    var inNumero = document.getElementById("inNumero")
    var outNumero = document.getElementById("outNumero")

    var dobro = Number(inNumero.value)*2;
    
    outNumero.textContent = "O dobro desse número é " + dobro

}

function calcularMultiplicacao() {
    var primeiroNumero = document.getElementById("primeiroNumero")
    var segundoNumero = document.getElementById("segundoNumero")

    var resultado = Number(primeiroNumero.value) * Number(segundoNumero.value)

    outResultado.textContent = "A Multiplicação entre esses números é " + resultado
}



btCalcular.addEventListener("click", calcularPerimetro);
btDobro.addEventListener("click", calcularDobro);
btMultiplicar.addEventListener("click", calcularMultiplicacao);
