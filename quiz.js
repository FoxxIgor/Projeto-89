var j1 = localStorage.getItem("nome1");
var j2 = localStorage.getItem("nome2");
var j1Score = 0;
var j2Score = 0;
var numero = 0;
var conferirr = j2;
document.getElementById("player1").innerHTML=j1;
document.getElementById("player2").innerHTML=j2;
document.getElementById("player1").innerHTML=j1;
document.getElementById("player1Points").innerHTML=j1Score;
document.getElementById("player2Points").innerHTML=j2Score;
document.getElementById("turnoPergunta").innerHTML="Turno de pergunta do: "+j1;
document.getElementById("turnoResposta").innerHTML="Turno de resposta do: "+j2;
function enviar(){
    /* Tia, o parseInt n ta funcionando, nem na aula esta funcionando */
    input1Value = document.getElementById("n1Input").value;
    input2Value = document.getElementById("n2Input").value;
    

    value = input1Value+" x "+input2Value;
    console.log(value);

    title = "<h1> Conta: </h1>";
    conta = "<label>"+value+"</label> <br> <br>";
    input = "<input type='number' id='inputResposta' placeholder='Coloque o resultado da conta aqui!'><br> <br>";
    button = "<button id='buttonResposta' onclick='conferir()'> Conferir </button>";
    document.getElementById("apararicao").innerHTML=title+conta+input+button;

    resultadoReal = input1Value*input2Value;
    console.log(resultadoReal);

}
function conferir(){
    playerResposta = document.getElementById("inputResposta").value;
    if(playerResposta == resultadoReal){
        numero++; /* Incrementa a var numero */
        console.log(numero);
        if(conferirr == j2){
            document.getElementById("player2Points").innerHTML=numero; /* Mostra nos pontos do j2 o numero */
            console.log("acertou!");
            document.getElementById("turnoPergunta").innerHTML="Turno de pergunta do: "+j2; /* Mostra que agora o turno de resposta e do j2 */
            document.getElementById("turnoResposta").innerHTML="Turno de resposta do: "+j1; /* Mostra que agora o turno de resposta e do j1 */
            document.getElementById("n1Input").innerHTML=0; /* Mostra no input 0 (n ta funcionando) */
            document.getElementById("n2Input").innerHTML=0; /* Mostra no  input2 0 (n ta funcionando) */
            document.getElementById("apararicao").innerHTML=""; /* Reseta a div */
            conferirr = j1;
        }
        if(conferirr == j1){
            document.getElementById("player1Points").innerHTML=numero; /* Mostra nos pontos do j2 o numero */
            console.log("acertou!");
            document.getElementById("turnoPergunta").innerHTML="Turno de pergunta do: "+j1; /* Mostra que agora o turno de resposta e do j2 */
            document.getElementById("turnoResposta").innerHTML="Turno de resposta do: "+j2; /* Mostra que agora o turno de resposta e do j1 */
            document.getElementById("n1Input").innerHTML=0; /* Mostra no input 0 (n ta funcionando) */
            document.getElementById("n2Input").innerHTML=0; /* Mostra no  input2 0 (n ta funcionando) */
            document.getElementById("apararicao").innerHTML=""; /* Reseta a div */
            conferirr = j2; 
        }
    }
}