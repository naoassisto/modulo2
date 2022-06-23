function gerarTabela () { //func gera tabela 
    let valor = parseInt(document.getElementById("alunos").value); //determina let valor
    var celula = "";
    for ( i = 0 ; i<valor ; i++ ){ // determina situação valor maior que 0
        celula += '<input type="number" placeholder= "trabalho" class="trabalho"></input>' + '<input type="number" placeholder= "prova" class="prova"></input><br>'; //determina os inputs de cala linha da tabela
    }
    $("#inputs").append(celula);
   
}

function calc() { //func para calcular os valores requisitados

    let valor = parseInt(document.getElementById("alunos").value); //determina var " valor" como o numero de alunos
    var trabalhos = 0; 
    var provas = 0;
    var Vp = [];
    var Vt = [];
    var i = 0;
    var j = 0;
    var medias = [];
    var mediageral = 0;
    
    $('.trabalho').each(function(){ //chama o valor dos inputs "trabalho"
        Vt[i] = parseFloat(this.value); //Parse float converte uma string em um numero
        trabalhos += parseFloat(this.value); //Parse int converte uma string em um numero
        i++;
    });
    
    $('.prova').each(function(){ //chama o valor dos inputs "prova"
        Vp[j] = parseFloat(this.value); //Parse float converte uma string em um numero
        provas += parseFloat(this.value); //Parse float converte uma string em um numero
        j++;
    });  
    
    var mediaP = provas/valor;  
    var mediaT = trabalhos/valor;

    var menorT = Vt[0];
    var menorP = Vp[0];

    for (let k = 0; k < valor ; k++) { //determina situação k maior que 0

        medias[k] = ((Vt[k] * 3) + ( Vp[k] * 2)) / 5; //calculo das medias 
        mediageral += medias[k];
        
        if (menorT > Vt[k]){menorT = Vt[k];}  // determina condição 
        
        if (menorP > Vp[k]){menorP = Vp[k];}
    }

        mediageral = parseFloat(mediageral/valor); //Parse float converte uma string em um numero

    for (let h = 0; h < valor ; h++) {$("#total").append("Médias individuais: ",medias[h], "<br>");}

    $("#total").append("Média geral: ",mediageral, "<br> Média dos trabalhos: ",mediaT, "<br>Média dos provas: ",mediaP, "<br>Menor trabalho: ",menorT,"<br>Menor prova: ",menorP);

        console.log("soma dos trabalhos: ", trabalhos);
        console.log("soma dos provas: ",provas);
        console.log("array dos trabalhos: ",Vt);
        console.log("array dos provas: ",Vp);
        console.log("medias individuais",medias);
        console.log("media geral: ",mediageral);    
        console.log("media dos trabalhos: ",mediaT);
        console.log("media dos provas: ",mediaP);
        console.log("Menor trabalho: ",menorT);
        console.log("Menor prova: ",menorP);
}

