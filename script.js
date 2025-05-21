// Datos de productos (simulando una base de datos)
const productos = [
    {
        id: 1,
        nombre: "Air Max Urban",
        precio: 329.99,
        marca: "Nike",
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 2,
        nombre: "Runner Pro",
        precio: 299.99,
        marca: "Nike",
        imagen: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        tallas: [36, 37, 38, 39, 40, 41, 42],
        colores: ["Negro", "Blanco", "Gris", "Azul"]
    },
    {
        id: 3,
        nombre: "Classic Street",
        precio: 279.99,
        marca: "Adidas",
        imagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
        tallas: [37, 38, 39, 40, 41, 42, 43],
        colores: ["Negro", "Blanco", "Verde", "Azul"]
    },
    {
        id: 4,
        nombre: "Urban Skate",
        precio: 259.99,
        marca: "Vans",
        imagen: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
        tallas: [36, 37, 38, 39, 40, 41, 42],
        colores: ["Negro", "Blanco", "Rojo", "Azul"]
    },
    {
        id: 5,
        nombre: "Sport Elite",
        precio: 349.99,
        marca: "Adidas",
        imagen: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        tallas: [38, 39, 40, 41, 42, 43, 44],
        colores: ["Negro", "Blanco", "Azul", "Rojo"]
    },
    {
        id: 6,
        nombre: "Retro Style",
        precio: 309.99,
        marca: "Puma",
        imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        tallas: [37, 38, 39, 40, 41, 42],
        colores: ["Negro", "Blanco", "Gris", "Rojo"]
    },
    {
        id: 7,
        nombre: "Urban Walk",
        precio: 269.99,
        marca: "New Balance",
        imagen: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        tallas: [36, 37, 38, 39, 40, 41, 42, 43],
        colores: ["Negro", "Blanco", "Gris", "Azul"]
    },
    {
        id: 8,
        nombre: "Casual Comfort",
        precio: 259.99,
        marca: "Converse",
        imagen: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
        tallas: [36, 37, 38, 39, 40, 41, 42],
        colores: ["Negro", "Blanco", "Rojo", "Azul"]
    },
    {
        id: 9,
        nombre: "Air Jordan Retro",
        precio: 399.99,
        marca: "Nike",
        imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tallas: [38, 39, 40, 41, 42, 43, 44],
        colores: ["Negro", "Blanco", "Rojo", "Azul"]
    },
    {
        id: 10,
        nombre: "Ultraboost 22",
        precio: 379.99,
        marca: "Adidas",
        imagen: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
        tallas: [38, 39, 40, 41, 42, 43],
        colores: ["Negro", "Blanco", "Gris", "Verde"]
    },
    {
        id: 11,
        nombre: "Old Skool Classic",
        precio: 249.99,
        marca: "Vans",
        imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80",
        tallas: [36, 37, 38, 39, 40, 41, 42],
        colores: ["Negro", "Blanco", "Rojo", "Azul"]
    },
    {
        id: 12,
        nombre: "Suede Classic",
        precio: 289.99,
        marca: "Puma",
        imagen: "https://images.unsplash.com/photo-1608379743498-63cc3f9f0c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tallas: [37, 38, 39, 40, 41, 42],
        colores: ["Negro", "Marrón", "Gris", "Azul"]
    },
    {
        id: 13,
        nombre: "574 Sport",
        precio: 299.99,
        marca: "New Balance",
        imagen: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        tallas: [37, 38, 39, 40, 41, 42, 43],
        colores: ["Negro", "Gris", "Azul", "Verde"]
    },
    {
        id: 14,
        nombre: "Chuck Taylor All Star",
        precio: 229.99,
        marca: "Converse",
        imagen: "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tallas: [36, 37, 38, 39, 40, 41, 42],
        colores: ["Negro", "Blanco", "Rojo", "Azul"]
    },
    {
        id: 15,
        nombre: "Reebok Classic Leather",
        precio: 269.99,
        marca: "Reebok",
        imagen: "https://images.unsplash.com/photo-1621881538090-b2b2bb0cb9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tallas: [37, 38, 39, 40, 41, 42, 43],
        colores: ["Negro", "Blanco", "Gris", "Beige"]
    },
    {
        id: 16,
        nombre: "Fila Disruptor",
        precio: 259.99,
        marca: "Fila",
        imagen: "https://images.unsplash.com/photo-1604868189278-e362ca3de4e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        tallas: [36, 37, 38, 39, 40, 41],
        colores: ["Negro", "Blanco", "Rosa", "Azul"]
    }
];

// Lista de marcas disponibles
const marcas = [...new Set(productos.map(producto => producto.marca))];

// Carrito de compras
let carrito = [];

// Elementos del DOM
const productosGrid = document.querySelector('.productos-grid');
const carritoItems = document.querySelector('.carrito-items');
const carritoTotal = document.getElementById('carrito-total');
const contadorCarrito = document.querySelector('.contador-carrito');
const carritoPanel = document.querySelector('.carrito-panel');
const overlay = document.querySelector('.overlay');
const cerrarCarrito = document.querySelector('.cerrar-carrito');
const carritoIcon = document.querySelector('.carrito-icon');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const formularioContacto = document.getElementById('formulario-contacto');

// Variables para filtrado
let productosFiltrados = productos;
let marcaSeleccionada = 'todas';

// Función para crear el filtro de marcas
function crearFiltroMarcas() {
    const filtroContainer = document.querySelector('.filtro-container');
    if (!filtroContainer) return;
    
    filtroContainer.innerHTML = `
        <h3 class="filtro-titulo">Filtrar por Marca</h3>
        <div class="filtro-opciones">
            <button class="filtro-btn active" data-marca="todas">Todas</button>
            ${marcas.map(marca => `<button class="filtro-btn" data-marca="${marca}">${marca}</button>`).join('')}
        </div>
    `;
    
    // Event listeners para los botones de filtro
    const filtroBtns = filtroContainer.querySelectorAll('.filtro-btn');
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botón activo
            filtroBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrar productos
            marcaSeleccionada = btn.dataset.marca;
            filtrarProductos();
        });
    });
}

// Función para filtrar productos
function filtrarProductos() {
    if (marcaSeleccionada === 'todas') {
        productosFiltrados = productos;
    } else {
        productosFiltrados = productos.filter(producto => producto.marca === marcaSeleccionada);
    }
    cargarProductos();
}

// Cargar productos en la página
function cargarProductos() {
    productosGrid.innerHTML = '';
    
    productosFiltrados.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        
        // Preparar los botones de tallas disponibles
        let tallasHTML = '';
        if (producto.tallas && producto.tallas.length > 0) {
            tallasHTML = `
                <p class="producto-tallas">Tallas:</p>
                <div class="tallas-container" data-producto-id="${producto.id}">
                    ${producto.tallas.map(talla => `<div class="talla-btn" data-talla="${talla}">${talla}</div>`).join('')}
                </div>
            `;
        } else {
            tallasHTML = '<p class="producto-tallas">Tallas: No disponible</p>';
        }
        
        // Generar opciones de colores
        const coloresOptions = producto.colores ? producto.colores.map(color => 
            `<option value="${color}">${color}</option>`
        ).join('') : '';
        
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <div class="producto-info">
                <h3 class="producto-nombre">${producto.nombre}</h3>
                ${tallasHTML}
                <p class="producto-marca">${producto.marca}</p>
                <p class="producto-precio">S/${producto.precio.toFixed(2)}</p>
                <div class="producto-opciones">
                    <div class="select-wrapper">
                        <label for="color-${producto.id}">Color:</label>
                        <select id="color-${producto.id}" class="select-color">
                            <option value="">Seleccionar</option>
                            ${coloresOptions}
                        </select>
                    </div>
                </div>
                <button class="btn-agregar" data-id="${producto.id}">
                    <i class="fas fa-shopping-cart"></i> Agregar al carrito
                </button>
            </div>
        `;
        productosGrid.appendChild(productoElement);
        
        // Añadir event listeners a los botones de talla
        const tallaBtns = productoElement.querySelectorAll('.talla-btn');
        tallaBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Desseleccionar todos los botones de talla para este producto
                tallaBtns.forEach(b => b.classList.remove('selected'));
                // Seleccionar el botón actual
                btn.classList.add('selected');
            });
        });
    });
}

// Agregar producto al carrito
function agregarAlCarrito(id, talla, color) {
    const producto = productos.find(p => p.id === id);
    
    // Verificar si el producto ya está en el carrito con la misma talla y color
    const itemExistente = carrito.find(item => 
        item.id === id && 
        item.talla === talla && 
        item.color === color
    );
    
    if (itemExistente) {
        // Incrementar cantidad si ya existe
        itemExistente.cantidad++;
    } else {
        // Agregar nuevo item al carrito
        carrito.push({
            ...producto,
            cantidad: 1,
            talla: talla,
            color: color,
            imagen: producto.imagen // Asegurarse de que la imagen se incluya
        });
    }
    
    // Actualizar carrito en la interfaz
    actualizarCarrito();
    
    // Mostrar notificación
    mostrarNotificacion(`${producto.nombre} (Talla: ${talla}, Color: ${color}) agregado al carrito`);
    
    // Abrir el carrito automáticamente si no está ya abierto
    if (!carritoPanel.classList.contains('active')) {
        toggleCarrito();
    }
}

// Actualizar carrito en la interfaz
function actualizarCarrito() {
    // Actualizar contador de items
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    contadorCarrito.textContent = totalItems;
    
    // Actualizar lista de items en el panel del carrito
    carritoItems.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
    } else {
        carrito.forEach(item => {
            const carritoItem = document.createElement('div');
            carritoItem.classList.add('carrito-item');
            carritoItem.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="carrito-item-info">
                    <h3 class="carrito-item-nombre">${item.nombre}</h3>
                    <div class="carrito-item-detalles">
                        <span>Talla: ${item.talla}</span> | <span>Color: ${item.color}</span>
                    </div>
                    <p class="carrito-item-precio">S/${item.precio.toFixed(2)}</p>
                    <div class="carrito-item-cantidad">
                        <button class="cantidad-btn restar" data-id="${item.id}" data-talla="${item.talla}" data-color="${item.color}">-</button>
                        <span class="cantidad-valor">${item.cantidad}</span>
                        <button class="cantidad-btn sumar" data-id="${item.id}" data-talla="${item.talla}" data-color="${item.color}">+</button>
                        <button class="eliminar-item" data-id="${item.id}" data-talla="${item.talla}" data-color="${item.color}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            carritoItems.appendChild(carritoItem);
        });
    }
    
    // Actualizar total
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    carritoTotal.textContent = `S/${total.toFixed(2)}`;
    
    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cambiar cantidad de un producto en el carrito
function cambiarCantidad(id, operacion) {
    const index = carrito.findIndex(item => item.id === id);
    
    if (index !== -1) {
        if (operacion === 'restar') {
            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad--;
            } else {
                // Si la cantidad llega a 0, eliminar del carrito
                carrito.splice(index, 1);
            }
        } else if (operacion === 'sumar') {
            carrito[index].cantidad++;
        }
        
        actualizarCarrito();
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.classList.add('notificacion');
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    // Estilo para la notificación
    notificacion.style.position = 'fixed';
    notificacion.style.bottom = '20px';
    notificacion.style.right = '20px';
    notificacion.style.backgroundColor = '#ff3e6c';
    notificacion.style.color = 'white';
    notificacion.style.padding = '10px 20px';
    notificacion.style.borderRadius = '5px';
    notificacion.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    notificacion.style.zIndex = '1000';
    notificacion.style.animation = 'fadeIn 0.3s ease';
    
    // Eliminar notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Animación para fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Abrir/cerrar panel del carrito
function toggleCarrito() {
    // Si el panel ya está activo y se hace clic en cerrar, lo cerramos
    if (carritoPanel.classList.contains('active') && event && (event.currentTarget === cerrarCarrito || event.currentTarget === overlay)) {
        carritoPanel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        // Si no está activo o se hace clic en el icono del carrito, lo abrimos
        carritoPanel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Aseguramos que el carrito muestre los artículos actualizados
        actualizarCarrito();
    }
}

// Abrir/cerrar menú móvil
function toggleMenu() {
    menu.classList.toggle('active');
}

// Función para cargar productos por marca en secciones específicas
function cargarProductosPorMarca() {
    // Limpiar todas las secciones de marca
    const productosMarca = document.querySelectorAll('.productos-marca');
    productosMarca.forEach(seccion => {
        seccion.innerHTML = '';
    });
    
    // Agrupar productos por marca
    marcas.forEach(marca => {
        const productosDeMarca = productos.filter(p => p.marca === marca);
        const seccionMarca = document.querySelector(`.productos-marca[data-marca="${marca}"]`);
        
        if (seccionMarca) {
            productosDeMarca.forEach(producto => {
                const productoElement = document.createElement('div');
                productoElement.classList.add('producto');
                
                // Preparar los botones de tallas disponibles
                let tallasHTML = '';
                if (producto.tallas && producto.tallas.length > 0) {
                    tallasHTML = `
                        <p class="producto-tallas">Tallas:</p>
                        <div class="tallas-container" data-producto-id="${producto.id}">
                            ${producto.tallas.map(talla => `<div class="talla-btn" data-talla="${talla}">${talla}</div>`).join('')}
                        </div>
                    `;
                } else {
                    tallasHTML = '<p class="producto-tallas">Tallas: No disponible</p>';
                }
                
                // Generar opciones de colores
                const coloresOptions = producto.colores ? producto.colores.map(color => 
                    `<option value="${color}">${color}</option>`
                ).join('') : '';
                
                productoElement.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
                    <div class="producto-info">
                        <h3 class="producto-nombre">${producto.nombre}</h3>
                        ${tallasHTML}
                        <p class="producto-marca">${producto.marca}</p>
                        <p class="producto-precio">S/${producto.precio.toFixed(2)}</p>
                        <div class="producto-opciones">
                            <div class="select-wrapper">
                                <label for="color-marca-${producto.id}">Color:</label>
                                <select id="color-marca-${producto.id}" class="select-color">
                                    <option value="">Seleccionar</option>
                                    ${coloresOptions}
                                </select>
                            </div>
                        </div>
                        <button class="btn-agregar" data-id="${producto.id}">
                            <i class="fas fa-shopping-cart"></i> Agregar al carrito
                        </button>
                    </div>
                `;
                seccionMarca.appendChild(productoElement);
                
                // Añadir event listeners a los botones de talla
                const tallaBtns = productoElement.querySelectorAll('.talla-btn');
                tallaBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        // Desseleccionar todos los botones de talla para este producto
                        tallaBtns.forEach(b => b.classList.remove('selected'));
                        // Seleccionar el botón actual
                        btn.classList.add('selected');
                    });
                });
            });
        }
    });
}

// Función para mostrar sección de marca específica
function mostrarSeccionMarca(marca) {
    // Ocultar todas las secciones
    seccionesMarca.forEach(seccion => {
        seccion.style.display = 'none';
    });
    
    // Mostrar la sección de la marca seleccionada
    const seccionMarca = document.getElementById(`marca-${marca}`);
    if (seccionMarca) {
        seccionMarca.style.display = 'block';
        
        // Desplazarse a la sección
        seccionMarca.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar filtros de marcas
    crearFiltroMarcas();
    
    // Cargar productos
    cargarProductos();
    
    // Cargar carrito desde localStorage
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
    
    // Event listener para agregar productos al carrito desde la cuadrícula principal
    productosGrid.addEventListener('click', e => {
        if (e.target.classList.contains('btn-agregar') || e.target.parentElement.classList.contains('btn-agregar')) {
            const button = e.target.closest('.btn-agregar');
            const id = parseInt(button.dataset.id);
            const productoElement = button.closest('.producto');
            const tallaSeleccionada = productoElement.querySelector('.talla-btn.selected');
            const colorSelect = productoElement.querySelector('.select-color');
            
            const talla = tallaSeleccionada ? tallaSeleccionada.dataset.talla : null;
            const color = colorSelect ? colorSelect.value : null;
            
            if (!talla) {
                alert('Por favor selecciona una talla');
                return;
            }
            
            if (!color || color === '') {
                alert('Por favor selecciona un color');
                return;
            }
            
            agregarAlCarrito(id, talla, color);
        }
    });
    
    // Event listener para agregar productos al carrito desde las secciones de marca
    document.querySelectorAll('.productos-marca').forEach(seccion => {
        seccion.addEventListener('click', e => {
            if (e.target.closest('.btn-agregar')) {
                const btn = e.target.closest('.btn-agregar');
                const id = parseInt(btn.dataset.id);
                const productoElement = btn.closest('.producto');
                const tallaSeleccionada = productoElement.querySelector('.talla-btn.selected');
                const colorSelect = productoElement.querySelector('.select-color');
                
                const talla = tallaSeleccionada ? tallaSeleccionada.dataset.talla : null;
                const color = colorSelect ? colorSelect.value : null;
                
                if (!talla) {
                    alert('Por favor selecciona una talla');
                    return;
                }
                
                if (!color || color === '') {
                    alert('Por favor selecciona un color');
                    return;
                }
                
                agregarAlCarrito(id, talla, color);
            }
        });
    });
    
    // Añadir interactividad a las marcas destacadas
    marcasLogos.forEach(marcaLogo => {
        marcaLogo.addEventListener('click', () => {
            const marca = marcaLogo.dataset.marca;
            mostrarSeccionMarca(marca);
        });
    });
    
    // Event listeners para el carrito
    carritoItems.addEventListener('click', e => {
        // Botón restar cantidad
        if (e.target.classList.contains('restar')) {
            const id = parseInt(e.target.dataset.id);
            cambiarCantidad(id, 'restar');
        }
        
        // Botón sumar cantidad
        if (e.target.classList.contains('sumar')) {
            const id = parseInt(e.target.dataset.id);
            cambiarCantidad(id, 'sumar');
        }
        
        // Botón eliminar item
        if (e.target.classList.contains('eliminar-item') || e.target.parentElement.classList.contains('eliminar-item')) {
            const button = e.target.closest('.eliminar-item');
            const id = parseInt(button.dataset.id);
            eliminarDelCarrito(id);
        }
    });
    
    // Abrir carrito
    carritoIcon.addEventListener('click', toggleCarrito);
    
    // Cerrar carrito
    cerrarCarrito.addEventListener('click', toggleCarrito);
    overlay.addEventListener('click', toggleCarrito);
    
    // Toggle menú móvil
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar menú móvil al hacer clic en un enlace
    menu.addEventListener('click', e => {
        if (e.target.tagName === 'A') {
            toggleMenu();
        }
    });
    
    // Formulario de contacto
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', e => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Aquí normalmente enviarías los datos a un servidor
            // Como es solo frontend, mostramos una notificación
            mostrarNotificacion(`Gracias ${nombre}, tu mensaje ha sido enviado.`);
            formularioContacto.reset();
        });
    }
    
    // Botón de finalizar compra
    document.querySelector('.btn-comprar').addEventListener('click', () => {
        if (carrito.length > 0) {
            mostrarNotificacion('¡Compra realizada con éxito!');
            carrito = [];
            actualizarCarrito();
            toggleCarrito();
        } else {
            mostrarNotificacion('Tu carrito está vacío');
        }
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.producto, .section-title');
    
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;
        
        if (posicion < alturaVentana * 0.9) {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }
    });
});

// Aplicar estilos iniciales para animación al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .producto, .section-title {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Disparar el evento scroll para animar elementos visibles inicialmente
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});