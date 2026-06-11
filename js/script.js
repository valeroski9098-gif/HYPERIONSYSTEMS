// ==========================================
// HYPERION SYSTEMS - SCRIPT FUTURISTA
// ==========================================

// PANTALLA DE CARGA DE 5 SEGUNDOS

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 5000);

});

// EFECTO APARICIÓN AL HACER SCROLL

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

const sections = document.querySelectorAll("section");

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});

// EFECTO SUAVE MENÚ

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });

    });

});

// MENSAJE DE BIENVENIDA EN CONSOLA

console.log(`
==================================
      HYPERION SYSTEMS
 La visión de un titán
==================================
`);