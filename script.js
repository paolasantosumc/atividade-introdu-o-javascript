function iniciarPrograma() {

    alert("Bem-vindo ao site!");

    let numero1 = Number(prompt("Digite o primeiro número:"));
    let numero2 = Number(prompt("Digite o segundo número:"));

    if(isNaN(numero1) || isNaN(numero2)){
        alert("Digite apenas números!");
        return;
    }else{
        let soma = numero1 + numero2;
        let subtracao = numero1 - numero2;
        let multiplicacao = numero1 * numero2;
        let divisao = numero1 / numero2;

        console.log("Primeiro número: " + numero1);
        console.log("Segundo número: " + numero2);
        console.log("Soma: " + soma);
        console.log("Subtração: " + subtracao);
        console.log("Multiplicação: " + multiplicacao);
        console.log("Divisão: " + divisao);

        document.getElementById("inicio").style.display = "none";
        document.getElementById("resultado").innerHTML = `
            <h1>Resultado das Operações</h1>
            <p>Primeiro número: ${numero1}</p>
            <p>Segundo número: ${numero2}</p>
            <p>Soma: ${soma}</p>
            <p>Subtração: ${subtracao}</p>
            <p>Multiplicação: ${multiplicacao}</p>
            <p>Divisão: ${divisao}</p>
            <button class="botao-reiniciar" onclick="reiniciar()">Reiniciar</button>`;
    }
}

function reiniciar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}