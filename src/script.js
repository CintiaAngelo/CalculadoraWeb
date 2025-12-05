import Calculadora from './calculadora.js';

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Calculadora";

    let operacaoAtual = "";

    function atualizarDisplay(valor) {
        operacaoAtual += valor;
        display.value = operacaoAtual;
    }

    function calcular() {
        try {
            const match = operacaoAtual.match(/(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)/);
            if (!match) return;

            const a = parseFloat(match[1]);
            const operador = match[2];
            const b = parseFloat(match[3]);
            let resultado;

            switch (operador) {
                case "+": resultado = Calculadora.adicionar(a, b); break;
                case "-": resultado = Calculadora.subtrair(a, b); break;
                case "*": resultado = Calculadora.multiplicar(a, b); break;
                case "/": resultado = Calculadora.dividir(a, b); break;
            }

            display.value = resultado;
            operacaoAtual = resultado.toString();
        } catch {
            display.value = "Erro";
            operacaoAtual = "";
        }
    }


    // Botões de números
    for (let i = 0; i <= 9; i++) {
        document.getElementById(`n${i}`).addEventListener("click", () => {
            atualizarDisplay(i);
        });
    }

    // Botões de operadores
    const operadores = {
        "operador+": "+",
        "operador-": "-",
        "operador*": "*",
        "operador/": "/"
    };

    Object.keys(operadores).forEach(id => {
        document.getElementById(id).addEventListener("click", () => {
            atualizarDisplay(operadores[id]);
        });
    });

    // Limpar display
    document.getElementById("nC").addEventListener("click", () => {
        operacaoAtual = "";
        display.value = "";
    });

    // Botão igual
    document.getElementById("n=").addEventListener("click", () => {
        calcular();
    });

    // Permitir teclado
    document.addEventListener("keydown", (e) => {
        if (e.key >= "0" && e.key <= "9") {
            atualizarDisplay(e.key);
        } else if (["+", "-", "*", "/"].includes(e.key)) {
            atualizarDisplay(e.key);
        } else if (e.key === "Enter") {
            calcular();
        } else if (e.key === "Backspace") {
            operacaoAtual = operacaoAtual.slice(0, -1);
            display.value = operacaoAtual;
        } else if (e.key.toLowerCase() === "c") {
            operacaoAtual = "";
            display.value = "";
        }
    });
});
