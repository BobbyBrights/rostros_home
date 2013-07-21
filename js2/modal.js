/*$(document).ready(function(){
        //parametros principales
      
 });
     */   
function closeModal(){
        // removemos divs creados
        $('#bgmodal').remove();
        $('#bgtransparent').remove();
}

function modal(ruta,ancho,alto)
{
	alert("entas");
    var contenidoHTML = ruta;
              	
     var wscr = $(window).width();
     var hscr = $(window).height();
     var bgdiv = $('<div>').attr({
                            className: 'bgtransparent',
                            id: 'bgtransparent'
                            });
    alert("despues de css");
    $('body').append(bgdiv);
	 var wscr = $(window).width();
	 var hscr = $(window).height();
    $('#bgtransparent').css("width", wscr);
    $('#bgtransparent').css("height", hscr);
    var moddiv = $('<div>').attr({
                            className: 'bgmodal',
                            id: 'bgmodal'
                            });     
    
    $('body').append(moddiv);
alert("cto:"+contenidoHTML);
     $('#bgmodal').load(contenidoHTML);
    $('#bgtransparent').css("width", wscr);
    $('#bgtransparent').css("height", hscr);
    $('#bgmodal').css("width", ancho);
    $('#bgmodal').css('height', alto);
    $('#bgmodal').css('resize', 'auto');
    var wcnt = $('#bgmodal').width();
    var hcnt = $('#bgmodal').height();
    var mleft = ( wscr - wcnt ) / 2;
    var mtop = ( hscr - hcnt ) /2;
    $('#bgmodal').css("left", mleft+'px');
    $('#bgmodal').css("top", mtop+'px');                	
}  
