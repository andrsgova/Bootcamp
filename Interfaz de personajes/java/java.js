let btnPresentar = document.querySelector(".boton"); // --> atrapo el boton presentar
let cajas = document.querySelectorAll("#cajas div");

let box = document.getElementsByTagName("span")[0];

// funcion que se dispara cuando se hace click en el boton presentar
function presentar() {
  boton = prompt(
    "¿Quién se presentará hoy? ¿Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, o Daisy?"
  );
  boton = boton.toLowerCase();
  console.log("El usuario ingreso: ", boton);
  let elected = document.getElementById(boton);
  const nameShort = [
    "mario",
    "luigi",
    "bowser",
    "peach",
    "yoshi",
    "toad",
    "toadette",
    "daisy",
  ];
  const nameFull = [
    "Mario",
    "Luigi",
    "Bowser Morton Koopa",
    "Princesa Peach Toadstool",
    "T. Yoshisaur Munchakoopas",
    "Toad",
    "Toadette",
    "Princesa Daisy",
    "Desconocido",
  ];

  let index = nameShort.indexOf(boton);
  if (index === -1) {
    box.innerHTML = "Desconocido";
  } else {
    // primero recorro todos los divs dentro de container cajas para quitarles la propiedad title
    for (let i = 0; i < cajas.length; i++) {
      cajas[i].removeAttribute("title");
    }

    box.innerHTML = nameFull[index];
    elected.setAttribute("title", "Presentado");
  }
};

btnPresentar.addEventListener("click", presentar);

// los personajes aparecen al tocar cada una de las cajas

const abrirCaja = document.querySelector('.cajas');

abrirCaja.addEventListener('click', e => {
  for (let i = 0; i < cajas.length; i++) {
    cajas[i].removeAttribute("title");
  }
    if(e.target.tagName === 'DIV') {
        e.target.setAttribute('title', 'Presentado');        
  }
});
