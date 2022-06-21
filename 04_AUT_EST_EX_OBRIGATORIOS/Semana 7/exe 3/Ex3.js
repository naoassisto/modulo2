function validar(){ //func para checar o numero de telefone
var numero = document.getElementById("numero").value; //determina a var numero
var formato = /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/; //determina a var estrutura, indicando entre chaves, o numero de casas  necessarias em cada seção do numero de telefone
if (numero.match(formato)) { //Determina a condição de que o valor do "numero" deve estar de acordo com o "formato"
            alert("Numero Validado"); //funçãoo alert cria um alerta na tela
    } else { //else = "caso", caso o numero não atinja a condição
            alert("Numero invalido, verifique o formato (XX)XXXXX-XXXX");          
    }
}
