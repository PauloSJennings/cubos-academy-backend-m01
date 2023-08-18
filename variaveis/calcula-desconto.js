let preco = 130;
let dinheiro = 80;
let desconto = preco - dinheiro;


console.log(calculaDesconto(preco, desconto));


function calculaDesconto(preco, desconto) {
    return (desconto * 100) / preco;
}