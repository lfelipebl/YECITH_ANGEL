
/* BOTTON UP */

document.getElementById("bttn_up_js").addEventListener("click", scrolluP);
function scrolluP(){

    vBScroll = document.documentElement.scrollTop;
    if (vBScroll > 0) {
        window.requestAnimationFrame(scrolluP);
        window.scrollTo(0,vBScroll -(vBScroll/10)); //Velocidad animación
    }
}

/********************************************************************************/



/* HEADER Animation */

buttonUp = document.getElementById("bttn_up_js");

window.onscroll = function(){
    vScroll = document.documentElement.scrollTop;
    header = document.getElementById("header_container_js"); 

    if(vScroll > 20){
        header.classList.add('nav_move');
    }else if(vScroll < 20){
        header.classList.remove('nav_move');
    }


    /* BOTTON UP */
    if(vScroll > 100){
        buttonUp.style.transform = "scale(1)";
    }else if(vScroll < 100){
        buttonUp.style.transform = "scale(0)";
    }
}
/********************************************************************************/


/* MENU - Responsive*/

document.getElementById("bars_menu_js").addEventListener("click", mostrar_menu);
document.getElementById("back_menu_js").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav_js");
background_menu = document.getElementById("back_menu_js");

function mostrar_menu(){
    nav.style.right= "0px";
    background_menu.style.display ="block";
}

function ocultar_menu(){
    nav.style.right= "-250px";
    background_menu.style.display ="none";
}
/********************************************************************************/



