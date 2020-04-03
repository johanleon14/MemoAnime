var x=localStorage.getItem("personaje");

function llenarInformacion(){
    var output = '';
    var z=parseInt(x)+1;

        var Nombre=jsonCards.info[x].Nombre;
        var Edad=jsonCards.info[x].Edad;
        var Altura=jsonCards.info[x].Altura;
        var Sexo=jsonCards.info[x].Sexo;
        var Anime=jsonCards.info[x].Anime;
        
        output += '<div class="imagen"><img src="img/cards/'+z+'.jpg"></div><div class="texto"><p>Nombre: '+Nombre+'</p><p>Edad: '+Edad+'</p><p>Altura: '+Altura+'</p><p>Sexo: '+Sexo+'</p><p>Anime: '+Anime+'</p></div>';
 
        document.getElementById('idpersonaje').innerHTML = output;
}