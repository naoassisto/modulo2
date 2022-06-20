function ordenar(vlrs, vlr){
	var array = vlrs.value.split(", "); //determina o array pela virgula
	var nF = vlr.value;
	console.log(array);
	console.log(nF);
	bubbleSort(array);//bubble sort compara os elementos adjacentes e os ordena em ordem crescente
	result(array, nF);
}

function bubbleSort(arr) { //le e ordena o array
    var length = arr.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - 1 - i); j++) { 
                   if(Number(arr[j]) > Number(arr[j+1])) {			   
                            var aux = arr[j]; 
						    arr[j] = arr[j+1]; 
							arr[j+1] = aux; 
					}
			} 	        
    }
	console.log(arr);
}

function result(arr, vlr){
	var length = arr.length;  
	for (var i = 0; i < length; i++) {	
		if (Number(arr[i]) == Number(vlr)) {		
			document.getElementById("resp").innerHTML += "nF: ";		
		}	
		document.getElementById("resp").innerHTML += arr[i] + ", <br>";	 
	}
	
}