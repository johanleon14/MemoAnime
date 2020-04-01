
//  REVOLVER Y SACAR 8 CARTAS
function rev() {
    for (var i = 0; i < 16; i = i + 2) {
        array_memoria[i] = 'img/cards/' + cards_num[i] + '.jpg';
        array_memoria[i + 1] = 'img/cards/' + cards_num[i] + '.jpg';
    }
    //alert(array_memoria);
}



// REDIRECCIONAR A LA GALERIA DE CARTAS
function cards()
{
    localStorage.setItem("tam", 16);
    localStorage.setItem("cards",cards_num);
    location.href = "Cards.html";
}