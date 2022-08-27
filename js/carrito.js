let carritoCompras = JSON.parse(localStorage.getItem("carritoCompras")) || [];
const carritoProductos = document.querySelector(".carritoCompras");
function agregarAlCarrito() {
  carritoProductos.innerHTML = "";
  carritoCompras.forEach((producto) => {
    carritoProductos.innerHTML += `  <tbody>
    <tr>
    <div>
      <td>${producto.nombre}</td>
      </div>
      <div>
      <img src=${producto.foto} class="fotoCarrito">
      </div>
      <div>
      <td>Cantidad:${producto.cantidad}</td>
      </div>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCardsRestar${producto.id}">-</button>
      <button type="button" class="btn btn-dark m-3 fs-6" id="btnCardsBorrar${producto.id}">Quitar del carrito</button> 
    </div>

  </tbody>
    `;
  });
  localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
  quitarDelCarrito();
  funcionBotonesRestar();
}
agregarAlCarrito();









function quitarDelCarrito() {
  carritoCompras.forEach((producto) => {
    document
      .querySelector(`#btnCardsBorrar${producto.id}`)
      .addEventListener("click", () => {
        carritoCompras = carritoCompras.filter(
          (producto3) => producto3.id !== producto.id
        );
        agregarAlCarrito();
      });
  });
}

function carritoRestar(producto) {
  carritoCompras.find((prod8) => prod8.id === producto.id);
  producto.cantidad--;

  agregarAlCarrito();
}

function funcionBotonesRestar() {
  carritoCompras.forEach((producto) => {
    document
      .querySelector(`#btnCardsRestar${producto.id}`)
      .addEventListener("click", () => {
        carritoRestar(producto);
      });
  });
}