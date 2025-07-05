function irpara(id){
    let elemento = document.getElementById(id);
    let alturaJanela = window.innerHeight;
    let posicaoElemento = elemento.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({ top: posicaoElemento - alturaJanela / 2, behavior: "smooth" });
}
/*Adicona funcao de ir para uma determinada parte do HTML, foi adiciona oa menus( home, qwerty, azerty, dvorak e contato), quando cliclado eme busca o elemento pelo id e tenta posiconar o meio da tela*/