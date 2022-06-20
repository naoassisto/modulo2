

function calculo() {
    document.getElementById("resp").innerHTML = ""; 
    let num = document.getElementById("num").value;
    let arrN = num.split("");
    let sum = 0;
    for (let i = 0; i < arrN.length; i++) {
        if (Number(arrN[i]) >= 0 && Number(arrN[i]) <= 9) {
            sum += Number(arrN[i]);
        }
    }
    document.getElementById("resp").innerHTML +="A soma dos dígitos é: " + sum;
}