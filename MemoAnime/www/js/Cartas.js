var x=localStorage.getItem("cards");

var x = x.split(",");
var tam=localStorage.getItem("tam");
//alert(x);
function fillCards(){
    var output = '';
    //alert(x);
    for (var i = 0; i < tam; i=i+2) {
        
        var Nombre=jsonCards.info[x[i]-1].Nombre;
        var Edad=jsonCards.info[x[i]-1].Edad;
        var Altura=jsonCards.info[x[i]-1].Altura;
        var Sexo=jsonCards.info[x[i]-1].Sexo;
        var Anime=jsonCards.info[x[i]-1].Anime;
        
        output += '<article><div class="imagen"><img src="img/cards/'+x[i]+'.jpg"></div><div class="text"><p>Nombre: '+Nombre+'</p><p>Edad: '+Edad+'</p><p>Altura: '+Altura+'</p><p>Sexo: '+Sexo+'</p><p>Anime: '+Anime+'</p></div><br></article>';
    }
    document.getElementById('idcards').innerHTML = output;
}