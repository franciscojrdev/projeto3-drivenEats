let prato;
let bebida;
let sobremesa;
let valor = 0;
let valorTotal = 0;
let priceFood = 0;
let priceDrink = 0;
let priceDessert = 0;
let mensagem;

function food(elemento) {
    const card = document.querySelector(".card1.card-border");
    if (card !== null) {
        card.classList.remove("card-border");
    }
    elemento.classList.add("card-border");
}
function drink(elemento) {
    const cardDrink = document.querySelector(".card2.card-border");
    if (cardDrink !== null) {
        cardDrink.classList.remove("card-border");
    }
    elemento.classList.add("card-border");
}
function dessert(elemento) {
    const cardDessert = document.querySelector(".card3.card-border");
    if (cardDessert !== null) {
        cardDessert.classList.remove("card-border");
    }
    elemento.classList.add("card-border");
}

function confirmarBotao() {
    let cards = document.querySelectorAll(".card-border");

    if (cards.length === 3) {
        let botao = document.querySelector('button');
        botao.classList.add("finish");
        botao.innerHTML = "Fechar Pedido";
        ConfirmZap();
    }
}
function ConfirmZap() {
    prato = document.querySelector(".card1.card-border h3").innerHTML;
    bebida = document.querySelector(".card2.card-border h3").innerHTML;
    sobremesa = document.querySelector(".card3.card-border h3").innerHTML;

    priceFood = document.querySelector(".card1.card-border span").innerHTML;
    priceDrink = document.querySelector(".card2.card-border span").innerHTML;
    priceDessert = document.querySelector(".card3.card-border span").innerHTML;

    valor = Number(priceFood.slice(3, priceFood.length - 1).replace(',', '.')) +
        Number(priceDrink.slice(3, priceDrink.length - 1).replace(',', '.')) +
        Number(priceDessert.slice(3, priceDessert.length - 1).replace(',', '.'));

    valorTotal = valor.toFixed(2);
}
function finalizar() {
    let finalizar = document.querySelector(".box-button .finish");
    if (finalizar !== null) {
        mensagem = (`Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal : R$ ${valorTotal}`);
        let encoded = encodeURIComponent(mensagem);
        link = `https://wa.me/5583999336847?text=${encoded}`;
        window.open(link);
    }
}