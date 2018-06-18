
$(document).ready(function () {
    // console.log("Jquery cargado");

    //selector id
    $("#rojo").css("background", "red")
        .css("color", "white");
    $("#amarillo").css("background", "yellow")
    .css("color", "white");
    $("#verde").css("background", "green")
    .css("color", "white");

    //Selectores de clase
    var mi_clase = $(".zebra");
    mi_clase.css("border","5px dashed black");

    $('.sin_borde').click(function(){
        // console.log("click");
        $(this).addClass('zebra');
    });
    
    // console.log(mi_clase);

    //Selectores de etiqueta
    var parrafos = $('p').css("cursor","pointer");;

    parrafos.click(function(){
        var tthis = $(this);
        if(tthis.hasClass('zebra'))
        {
            tthis.addClass('grande');
        }
        
    });

    //Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros
    $('p, a').addClass('margen-superior');
    
    var busqueda = $("#elemento2").parent().parent().find('.resaltado');

	console.log(busqueda);


});
