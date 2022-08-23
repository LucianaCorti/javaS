//Titulo
let tituloPrincipal = document.getElementById("tituloPrincipal");
tituloPrincipal.innerText = "Tienda Online";

function crearSubtitulo() {
  const subtitulo = document.getElementById("subtitulo");
  subtitulo.innerHTML =
    "<p>A continuación vas a poder seleccionar los productos deseados:</p>";
}
crearSubtitulo();
//Array productos
class ProductosTienda {
  constructor(foto, nombre, descripcion, precio, id) {
    this.foto = foto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.id = id;
  }
}

const listaProductos = [];

function agregandoArray() {
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660933176/hanna-balan-YasQvzPbGOQ-unsplash_1_pfna0z.jpg",
      "Vela en cuenco de cerámica",
      "Vela de cera de soja",
      800,
      1
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660933257/shashi-chaturvedula-0olnnoM1ieM-unsplash_1_wm58tz.jpg",
      "Sahumerios aroma a coco",
      "Pack por 6 unidades",
      780,
      2
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660933747/oriento-Kmoc9lIexUc-unsplash_1_elsbpk.jpg",
      "Sahumador",
      "Sahumador de cerámica",
      1200,
      3
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660936126/content-pixie-LIWTop_QiQE-unsplash_1_j27n0q.jpg",
      "Palo Santo",
      "Pack por 3 unidades",
      650,
      4
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660935288/volant-P3nC8BaYKZs-unsplash_1_hblzvu.jpg",
      "Humidificador",
      "Humidificador eléctrico",
      1600,
      5
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660938027/susanna-marsiglia-9Doy0urDBko-unsplash_1_gbpslo.jpg",
      "Porta Sahumerio",
      "Porta Sahumerio de cerámica",
      850,
      6
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660937712/no-revisions-OAW0OCLn52I-unsplash_1_eiqjc4.jpg",
      "Vela parafina",
      "Vela de parafina en envase de vidrio",
      800,
      7
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660938764/ray-kakte-vCc-F97wkHk-unsplash_1_btzfex.jpg",
      "Porta Conitos",
      "Porta Conitos realizado en cerámica",
      860,
      8
    )
  );
  listaProductos.push(
    new ProductosTienda(
      "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1660934916/pim-chayada-ko7osEfy4xo-unsplash_1_xai8nd.jpg",
      "Difusor",
      "Varillas aromatizantes + Envase de vidrio",
      860,
      9
    )
  );
}

agregandoArray();
//Cards
function crearTablaProductos() {
  const tarjeta = document.querySelector(".cardProductos");
  listaProductos.forEach((producto) => {
    tarjeta.innerHTML += `<div class="card">
    <img class="card-img-top" src=${producto.foto}>
    <div class="card-body">
      <h5 class="card-title text-decoration-underline">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">$${producto.precio}</p>
      <button type="button" class="btn btn-dark m-3 fs-6 " id="btnCards${producto.id}">Añadir al carrito</button>
    </div>
    </div>
    `;
  });
  funcionBotones();
}

crearTablaProductos();

function funcionBotones() {
  listaProductos.forEach((producto) => {
    document
      .querySelector(`#btnCards${producto.id}`)
      .addEventListener("click", () => {
        console.log(producto);
        carrito(producto);
      });
  });
}

let carritoCompras = [];

function carrito(producto) {
  let agregado = carritoCompras.some((prod1) => prod1.id === producto.id);
  if (agregado === false) {
    producto.cantidad = 1;
    carritoCompras.push(producto);
  } else {
    let prod2 = carritoCompras.find((prod2) => prod2.id === producto.id);
    prod2.cantidad++;
  }
  console.log(carritoCompras);
}

//Evento Form
const fomularios = document.querySelectorAll("input");

function fondoInput() {
  fomularios.forEach((formulario) => {
    formulario.addEventListener("click", () => {
      formulario.className = "fondoColor1";
    });
    formulario.addEventListener("blur", () => {
      formulario.className = "fondoColor2";
    });
  });
}

fondoInput();