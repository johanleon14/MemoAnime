var cards_num = ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
                '41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];
function cartas(){
    var output = '';
    for (var i = 0; i < cards_num.length; i++) {
        
        output += '<article><div class="imagen"><img src="img/cards/'+cards_num[i]+'.jpg"></div></article>';
    }
    document.getElementById('idcartas').innerHTML = output;
}