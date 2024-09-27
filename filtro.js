// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.querySelector("lista-de-productos"); //debe ser queryselector al ser varios productos y el punto y coma
const $i = document.querySelector('.input');


for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");//punto y coma
  d.classList.add("producto");//punto y coma

  var ti = document.createElement("p");//punto y coma
  ti.classList.add("titulo");//punto y coma
  ti.textContent = productos[i].nombre;//punto y coma
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);//punto y coma
  d.appendChild(imagen);//punto y coma

  li.appendChild(d);//punto y coma
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");//punto y coma
    d.classList.add("producto");//punto y coma
  
    var ti = document.createElement("p");//punto y coma
    ti.classList.add("titulo");//punto y coma
    ti.textContent = productosFiltrados[i].nombre;//punto y coma
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);//punto y coma
    d.appendChild(imagen);//punto y coma
  
    li.appendChild(d);//punto y coma
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  