
function alterarStatus(indice){
let jogoClicado = document.getElementById("game-" + indice);
let divDoJogo = document.getElementById("div" + indice);
let botaoDoJogo = document.getElementById(indice);
if(divDoJogo.classList.contains("dashboard__item__img--rented")){
    divDoJogo.classList.remove("dashboard__item__img--rented");
    botaoDoJogo.classList.remove("dashboard__item__button--return");
    botaoDoJogo.innerHTML = "Alugar";
}
else{
    divDoJogo.classList.add("dashboard__item__img--rented");
    botaoDoJogo.classList.add("dashboard__item__button--return");
    botaoDoJogo.innerHTML = "Devolver";
}

alert(nomeJogo.textContent + 2);
}