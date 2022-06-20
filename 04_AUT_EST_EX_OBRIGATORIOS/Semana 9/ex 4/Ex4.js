

function calc(){
    document.getElementById("resp").innerHTML = "";	
    let n = document.getElementById("num").value;
    if (n > 0) {
        var fibo = [];
        fibo[0] = 1;
        fibo[1] = 1;
        for (var i = 2; i < n; i++) {
            fibo[i] = fibo[i - 2] + fibo[i - 1];
        }
    }
    document.getElementById("resp").innerHTML = ' Até o enésimo termo é: ' + fibo;
}