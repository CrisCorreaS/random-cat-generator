let enlace = document.querySelector("a");
let imagen = document.querySelector("img");
let parrafo = document.querySelector("p");
let siguiente = document.querySelector("i");

let gatitos = [];
let numero = 1;

async function showGatito(num) {
  const imgElement = new Image();
  imgElement.src = gatitos[num - 1].img;
  imgElement.width = gatitos[num - 1].width;
  imgElement.height = gatitos[num - 1].height;

  await imgElement.decode();

  enlace.href = gatitos[num - 1].img;
  imagen.src = gatitos[num - 1].img;
  imagen.style.aspectRatio = gatitos[num - 1].width / gatitos[num - 1].height;

  parrafo.innerHTML = "Este es el gatito número " + num;
  numero++;
}

function addGatito() {
  $.ajax({
    url: "https://api.thecatapi.com/v1/images/search",
    dataType: "json",
    success: function (data) {
      gatito = {
        img: data[0].url,
      };

      gatitos.push(gatito);

      showGatito(numero);
    },
  });
}

document.addEventListener("DOMContentLoaded", addGatito, false);
siguiente.addEventListener("click", addGatito, false);
