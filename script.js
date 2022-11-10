//MENU SMARTPHONE
let nav = document.querySelector("nav");
let boton_menu = document.querySelector("#boton-menu");
let menu = document.querySelector(".menu-smartphone");
let menu_proyectos = document.querySelector(".proyectos");
let flecha = document.querySelector(".flecha");
let submenu = document.querySelector(".submenu");

boton_menu.addEventListener('click', desplegar_menu);
function desplegar_menu() {
    menu.classList.toggle("menu-desplegado");
    nav.classList.toggle("nav-menu-desplegado");
    submenu.style.height = "0px";
    flecha.classList.remove("flecha-girada");
};

function desplegar_submenu() {
    flecha.classList.toggle("flecha-girada");
    let height = 0;
    if (submenu.style.height == "0px") {
        height = submenu.scrollHeight;
    };
    submenu.style.height = height + "px";
};
menu_proyectos.addEventListener("click", desplegar_submenu);


//MENU DESKTOP
let menu_desk_proyectos = document.querySelector(".menu-desk-proyectos");
let menu_desk_div_submenu = document.querySelector(".menu-desk-div-submenu");
let flecha_desk = document.querySelector(".flecha-desk");

function desplegar_submenu_desk() {
    menu_desk_div_submenu.classList.toggle("menu-desk-div-submenu-desplegado");
    flecha_desk.classList.toggle("flecha-girada");
};
menu_desk_proyectos.addEventListener("click", desplegar_submenu_desk);


//BARRAS DE LENGUAJES EN encriptador.html y ahorcado.html
if (location.pathname == '/portfolio/encriptador.html') {
    window.onload = html_barra(), css_barra(), js_barra();
    function html_barra() {
        let html_porcentaje = document.querySelector(".encriptador-html-porcentaje");
        let width = 0;
        let id = setInterval(frame, 50);
        function frame() {
            if (width >= 23) {
                clearInterval(id);
            } else {
                width++;
                html_porcentaje.style.width = width + '%';
                html_porcentaje.innerHTML = width + '%';
            }
        }
    };

    function css_barra() {
        let css_porcentaje = document.querySelector(".encriptador-css-porcentaje");
        let width = 0;
        let id = setInterval(frame, 20);
        function frame() {
            if (width >= 53) {
                clearInterval(id);
            } else {
                width++;
                css_porcentaje.style.width = width + '%';
                css_porcentaje.innerHTML = width + '%';
            }
        }
    };

    function js_barra() {
        let js_porcentaje = document.querySelector(".encriptador-js-porcentaje");
        let width = 0;
        let id = setInterval(frame, 50);
        function frame() {
            if (width >= 24) {
                clearInterval(id);
            } else {
                width++;
                js_porcentaje.style.width = width + '%';
                js_porcentaje.innerHTML = width + '%';
            }
        }
    };

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}


if (location.pathname == '/portfolio/ahorcado.html') {
    window.onload = html_barra(), css_barra(), js_barra();
    function html_barra() {
        let html_porcentaje = document.querySelector(".ahorcado-html-porcentaje");
        let width = 0;
        let id = setInterval(frame, 40);
        function frame() {
            if (width >= 21) {
                clearInterval(id);
            } else {
                width++;
                html_porcentaje.style.width = width + '%';
                html_porcentaje.innerHTML = width + '%';
            }
        }
    };

    function css_barra() {
        let css_porcentaje = document.querySelector(".ahorcado-css-porcentaje");
        let width = 0;
        let id = setInterval(frame, 20);
        function frame() {
            if (width >= 38) {
                clearInterval(id);
            } else {
                width++;
                css_porcentaje.style.width = width + '%';
                css_porcentaje.innerHTML = width + '%';
            }
        }
    };

    function js_barra() {
        let js_porcentaje = document.querySelector(".ahorcado-js-porcentaje");
        let width = 0;
        let id = setInterval(frame, 20);
        function frame() {
            if (width >= 41) {
                clearInterval(id);
            } else {
                width++;
                js_porcentaje.style.width = width + '%';
                js_porcentaje.innerHTML = width + '%';
            }
        }
    };

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};

