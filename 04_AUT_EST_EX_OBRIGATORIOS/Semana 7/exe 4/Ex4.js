function calculo(){ //func do preço e do total
    var passageiros = document.getElementById("numero").value; //determina a var passageiros 
    var tipo = document.getElementById("hora").value; //determina a var tipo
    if (tipo == "diurno"){ // Condição se a var tipo = diurno
        var Preço = 200; //determina a var preço 
        if (passageiros >= 50){  //condiçao do desconto, se a var passageiros > ou = 50       
            Preço = (200*0.6); //corrige preço dependendo da candição
            var total = Preço * passageiros; //Determina a var total = "preço" vezes "passageiros"
            document.getElementById("result").innerHTML = "O valor individual será: " + Preço + " reais. O total será: " + total;
        }
        else {
            var total = Preço * passageiros; //Determina a var total = "preço" vezes "passageiros"
             document.getElementById("result").innerHTML = "O valor individual será: " + Preço + " reais. O total será: " + total;
        }
    }
    else {
        var Preço = 100; //determina a var preço
        if (passageiros >= 50){ //condiçao do desconto, se a var passageiros > ou = 50
            Preço = (100*0.8)  //corrige preço dependendo da candição
            var total = Preço * passageiros; //Determina a var total = "preço" vezes "passageiros"
             document.getElementById("result").innerHTML = "O valor individual será: " + Preço + " reais. O total será: " + total;
        }
        else {
            var total = Preço * passageiros; //Determina a var total = "preço" vezes "passageiros"
             document.getElementById("result").innerHTML = "O valor individual será: " + Preço + " reais. O total será: " + total;
        }
    };
};