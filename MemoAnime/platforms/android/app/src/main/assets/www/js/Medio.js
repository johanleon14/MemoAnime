
//  REVOLVER Y SACAR 15 CARTAS
function rev() {
    for (var i = 0; i < 30; i = i + 2) {
        array_memoria[i] = 'img/cards/' + cards_num[i] + '.jpg';
        array_memoria[i + 1] = 'img/cards/' + cards_num[i] + '.jpg';
    }
    //alert(array_memoria);
}

// REDIRECCIONAR A LA GALERIA DE CARTAS
function cards()
{
    
    localStorage.setItem("tamaño", 30);
    localStorage.setItem("cartas",cards_num);
    location.href = "Cartas.html";
}