function organizar(){
    document.getElementById("resp").innerHTML = "";	
    let names = document.getElementById("plvrs").value;
    let arrN = names.split(";");
    let sort = arrN.sort();
    console.log(sort);
    document.getElementById("resp").innerHTML = sort;
}