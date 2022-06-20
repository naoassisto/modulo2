
function Resultado(){
		
        document.getElementById("Resposta").innerHTML = ``; //puxa o <p> 
        var valor = document.getElementById("preço").value; //Transforma o "input" em uma variavel 
        calculo100(valor);//Determina a variavel "valor" como o valor da proxima func
        
}

function calculo100(v){

  var Cem = Math.floor(v/100); //"Math.floor" retorna o numero inteiro (menor ou igual) mais proximo;
  var rst = v % 100; //Determina o resto da conta

  document.getElementById("Resposta").innerHTML += `<br /> Notas de 100 = ` + Cem; // Estrutura resposta da conta;
  calculo50(rst); //Determina o valor para a proxima func
  
} 

function calculo50(v){

  var Cinquenta = Math.floor(v/50);
  var rst = v % 50;

  document.getElementById("Resposta").innerHTML += `<br /> Notas de 50  = ` + Cinquenta;
  calculo20(rst);
  
}

function calculo20(v){

  var Vinte = Math.floor(v/20);
  var rst = v % 20;

  document.getElementById("Resposta").innerHTML += `<br /> Notas de 20  = ` + Vinte;
  calculo10(rst);
  
}

function calculo10(v){

    var Dez = Math.floor(v/10);
    var rst = v % 10;

    document.getElementById("Resposta").innerHTML += `<br /> Notas de 10  = ` + Dez;
    calculo5(rst);
    
} 

function calculo5 (v){

    var Cinco = Math.floor(v/5);
    var rst = v % 5;

    document.getElementById("Resposta").innerHTML += `<br /> Notas de 5  = ` + Cinco;
    calculo2(rst);
}

function calculo2 (v){

    var Dois = Math.floor(v/2);
    var rst = v % 2;

    document.getElementById("Resposta").innerHTML += `<br /> Notas de 2  = ` + Dois;
    calculo1(rst);
}

function calculo1 (v){

    var Um = v / 1;
    document.getElementById("Resposta").innerHTML += `<br /> Notas de 1  = ` + Um;
  
}



