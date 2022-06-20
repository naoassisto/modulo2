function checar(){
    let num = document.getElementById("num").value; 
    let arrNum = num.split(""); 
    if (arrNum[0] % 2 == 0) {  
        document.getElementById("resp").innerHTML = "par";
    }
    else {
        document.getElementById("resp").innerHTML = "impar";
    }
}