const form = document.getElementById('forms');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const marca = form.elements['marca'].value;
    const modelo = form.elements['modelo'].value;
    const precoadquiricao = form.elements['precoadquiricao'].value;
    const anomatricula = form.elements['anomatricula'].value;
    const quilometragem = form.elements['quilometragem'].value;

    console.log("Marca:", marca,"\nModelo:", modelo,"\nPreço de Aquisição:", precoadquiricao,"\nAno da matricula:", anomatricula,"\nQuilometragem:", quilometragem);
    
    let desval = desvalorizacao(anomatricula, quilometragem);
    
    console.log(desval[0], desval[1]);

    let precofinal = precoadquiricao * desval[0] * desval[1];
    precofinal = Math.round(precofinal);
    console.log("Preço final:", precofinal);
    
    document.querySelector('#MauEstado').innerHTML= Math.round(precofinal * 0.6) + ' €'; 
    document.querySelector('#BomEstado').innerHTML= Math.round(precofinal * 1) + ' €';
    document.querySelector('#MuitoBomEstado').innerHTML= Math.round(precofinal * 1.1) + ' €';

    for (let i = 0; i < 3; ++i) {
        document.querySelectorAll(".MarcaInfo")[i].innerHTML = ('Marca: ' + marca);
        document.querySelectorAll(".ModeloInfo")[i].innerHTML = ('Modelo: ' + modelo);
        document.querySelectorAll(".MatriculaInfo")[i].innerHTML = ('Ano: ' + anomatricula);
        document.querySelectorAll(".QuilometragemInfo")[i].innerHTML = ('Km: ' + quilometragem);
        document.querySelectorAll(".AdquiricaoInfo")[i].innerHTML = ('Adquirição: ' + precoadquiricao + ' €');
    }

    if(precofinal * 0.6 > 500) {
        document.getElementById('overlay').className = "overlayOn";
    }
    else{
        alert("Preço de venda inferior a 500€")
    }
});

function changeClass() {
    document.getElementById('overlay').className = "overlayOff";
}

function desvalorizacao(anomatricula, quilometragem) {
    // Ano da Matricula
    let anos = 2022 - anomatricula; 
    let c1 = 0;

    if(anos > 10){
        anos -= 10;
        c1 = 1 - (10 * 0.05 + anos * 0.04);
    }else{
        c1 = 1 - (anos * 0.05);
    }
    // Quilometragem
    let c2 = 1;

    if(quilometragem > 30000 && quilometragem <= 70000)
        c2 = 0.95;
    else if(quilometragem > 70000)
        c2 = 0.9;

    return [c1, c2];
}



