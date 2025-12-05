function adicionar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) return "Erro: Divisão por zero";
    return a / b;
}

export default { adicionar, subtrair, multiplicar, dividir };