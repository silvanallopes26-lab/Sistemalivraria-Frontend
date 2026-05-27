// BOTÃO PROMOÇÃO

const btnPromocao =
document.getElementById("btnPromocao");

if(btnPromocao){

    btnPromocao.addEventListener(
        "click",
        () => {

            alert(
                "🔥 Promoções disponíveis!"
            );

        }
    );

}

// BOTÕES COMPRAR

const botoes =
document.querySelectorAll(".btnComprar");

botoes.forEach((botao) => {

    botao.addEventListener(
        "click",
        () => {

            alert(
                "📚 Livro adicionado ao carrinho!"
            );

        }
    );

});