function irpara(id){
    let elemento = document.getElementById(id);
    let alturaJanela = window.innerHeight;
    let posicaoElemento = elemento.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({ top: posicaoElemento - alturaJanela / 2, behavior: "smooth" });
}
