function primos(){
    let vl1 = Number(document.getElementById("v1").value);
    let vl2 = Number(document.getElementById("v2").value);
    console.log('teste') 
    for (let i = vl1; i <= vl2; i++) {
        let alerta = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                alerta += 1;	
                break;
            }
        }
        if (alerta == 0 && i > 1) {
            console.log(i);
            document.getElementById("resp").innerHTML += i + '<br>';
        }
    }
}