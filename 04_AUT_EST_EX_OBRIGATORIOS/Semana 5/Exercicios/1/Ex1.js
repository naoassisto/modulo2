function CalcAndShow(v1,v2){
    var vl1 = parseInt(document.getElementById("v1").value); //parseint transforma uma string em um integral 
    var vl2 = parseInt(document.getElementById("v2").value);
    var Tipo = document.getElementById("Tipo").value; // determina o tipo
    const result = Calcu(vl1, vl2, Tipo); //determina a constante result
    document.getElementById("resposta").innerHTML = result; //determina result como a resposta


}

function Calcu(x, y, Tipo){
    var result; 
    result = eval(x + Tipo + y); //eval avalia e executa
    return result;// retorna a resposta
};
   
