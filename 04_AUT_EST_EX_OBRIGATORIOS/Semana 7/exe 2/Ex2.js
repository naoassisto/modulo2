
function Troca(){ //Func que troca os inputs
    var x = document.getElementById("1").value;  //determina o primeiro input como x
    document.getElementById("1").value = document.getElementById("2").value; //Iguala o primeiro e segundo input
    document.getElementById("2").value = x; //substitui x pelo segundo input
    
}