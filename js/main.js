$(document).ready(function(){
    /*Hamburguesa*/
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		 $hamburger.toggleClass("is-active");
		// Do something else, like open/close menu
		$('.opciones-menu').toggle();
	});
    //Esconder menú cuando selecciones una opción del menú
    $('.menu-item').click(function(){
        $('.opciones-menu').toggle();
        $hamburger.toggleClass("is-active");
    });
    
});