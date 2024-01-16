const botonAgregar = document.querySelectorAll(".botonAgregar");
const botonEliminar = document.querySelectorAll(".botonEliminar");
const template = document.querySelector("#template");
const contenedorColumna = document.querySelector("#contenedorColumna");
const fragment = document.createDocumentFragment();

const carritoVerduras = [];

const agregarAlcarrito = (e) => {

    const producto = {
        nombre: e.target.dataset.verdura,
        id: e.target.dataset.verdura,
        cantidad: 1
    }
    const indice = carritoVerduras.findIndex(indice => indice.nombre === producto.nombre)

    if(indice !== -1) {
        carritoVerduras[indice].cantidad++;
    } else {
        carritoVerduras.push(producto);
    }
    ponerCarrito();
};

botonAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlcarrito)
});



const ElimininarCarrito = (e) => {
    const productoId = e.target.dataset.verdura;
    const condicionIndex = carritoVerduras.findIndex(verdura => verdura.id === productoId);
    const condicionSome = carritoVerduras.some(item => item.cantidad === 0);
    
    // console.log(condicionFilter.pop(condicionIndex));
    if(condicionIndex !== -1) {
        carritoVerduras[condicionIndex].cantidad--;
    } 
    if(condicionSome === true) {
        carritoVerduras.splice(condicionIndex, 1);
    }
    
    
    ponerCarrito();
};
botonEliminar.forEach(boton => boton.addEventListener("click", ElimininarCarrito))

const ponerCarrito = () => {
    contenedorColumna.textContent = "";
    carritoVerduras.forEach(verdura => {
        const clon = template.content.cloneNode(true);
        clon.querySelector(".contenedor-titulo").textContent = verdura.nombre;
        clon.querySelector(".rounded-circle").textContent = verdura.cantidad;
        fragment.appendChild(clon);
    });
    contenedorColumna.appendChild(fragment);
};















// const telefonos = ['Samsung', 'Xiaomi', "Iphone"];


// const nuevoArray = telefonos.map(telefono => {
//     return telefono;
// });

// console.log(nuevoArray);


// const animales = [
//     {id: 1, nombre: "Gato🐈"},
//     {id: 2, nombre: "Leon🦁"},
//     {id: 3, nombre: "Oso🐻"}
// ];

// const indice = animales.findIndex(animal => animal.id === 1);
// console.log(animales[indice]);

// const comprobar = animales.some((animal) => animal.id === 3);
// console.log(comprobar);

// const {nombre} = animales.find((animal) => animal.id === 2);
// console.log(nombre);

// const nuevosAnimales = animales.filter(animal => animal.id !== 3);
// console.log(nuevosAnimales)

// const arrayAnimales = ['Zorro🦊', 'Mapache', 'Mariposa'];
// const arrayAnimales2 = ['Gato🐱‍👤', 'Zebra🦓', 'Tigre🐯'];

// El spread operator
// const juntar = [...arrayAnimales, ...arrayAnimales2];
// console.log(juntar);

// // Metodo concat
// const animalesJuntar = arrayAnimales.concat(arrayAnimales2);
// console.log(animalesJuntar);

// const animales = arrayAnimales.slice(0);
// console.log(animales);

// const numeros = [1, 2, 3, 4, 5];

// const sumarTodos = numeros.reduce((acumulador, valorActual) => acumulador + valorActual)

// console.log(sumarTodos);

// const animales = "Aguila, Oso, Koala, Zorro";

// const animalesArray = animales.split(",");


// const nuevoText = animalesArray.join(",");
// console.log(nuevoText);
