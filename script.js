/* =========================
   BUSCADOR
========================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");


function realizarBusqueda() {

    const texto =
        searchInput.value
        .toLowerCase()
        .trim();


    if (texto === "") {

        alert("Escribe algo para buscar.");

        return;
    }


    const articulos =
        document.querySelectorAll(".article-card");


    let encontrados = 0;


    articulos.forEach(function(articulo) {

        const titulo =
            articulo
            .querySelector("h3")
            .textContent
            .toLowerCase();


        const descripcion =
            articulo
            .querySelector("p")
            .textContent
            .toLowerCase();


        if (
            titulo.includes(texto) ||
            descripcion.includes(texto)
        ) {

            articulo.style.display = "block";

            articulo.style.border =
                "2px solid #3366cc";

            encontrados++;

        } else {

            articulo.style.display = "none";

        }

    });


    if (encontrados === 0) {

        alert(
            "No se encontraron artículos relacionados con: "
            + texto
        );

    } else {

        document
            .getElementById("articulos")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


/* BOTÓN DE BÚSQUEDA */

searchButton.addEventListener(
    "click",
    realizarBusqueda
);


/* BUSCAR CON ENTER */

searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            realizarBusqueda();

        }

    }
);


/* =========================
   EFECTO EN ENLACES
========================= */

const enlaces =
    document.querySelectorAll(
        ".main-nav a, .sidebar a"
    );


enlaces.forEach(function(enlace) {

    enlace.addEventListener(
        "click",
        function() {

            console.log(
                "Navegando a: "
                + enlace.textContent
            );

        }
    );

});