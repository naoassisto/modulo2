
function sub(){ //func para subtrair
    var x = Number(document.getElementById("num").value); //define a var x
    x -= 1; // Subtrai uma unidade do valor de x
    document.getElementById("num").value = x;
};

function soma(){ //func para somar
    var x = Number(document.getElementById("num").value); //define a var X
    x += 1; //soma uma unidade do valor de x
    document.getElementById("num").value = x;
};

