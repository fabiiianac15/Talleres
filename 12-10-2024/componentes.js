class polimardoBuenardopolis extends HTMLElement {
    constructor() {
        super();
    }

    // este metodo activa el uso del componente
    connectedCallback() {
        this.innerHTML = "<p>Holaaa Tonotos</p>";
        this.style.fontFamily = "arial";
        this.style.fontSize = "20px"; 
        this.style.fontWeight = "bold";
        this.style.textDecoration = "underline"
    }
    
}

window.customElements.define("polimardo-buenardopolis",polimardoBuenardopolis);

class botonCarrito extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<button class="carrito-button">Ir al Carrito</button>`;
        this.style.fontFamily = "Arial";
        this.style.fontSize = "20px"; 
        this.style.display = "inline-block"; 
        this.style.margin = "10px"; 
        this.style.border = "none"; 
        this.style.borderRadius = "5px"; 
        this.style.cursor = "pointer"; 

        const style = document.createElement('style');
        style.textContent = `
            .carrito-button {
                background-color: green; 
                color: white; 
                padding: 10px 20px; 
                font-size: 20px;
                border: none;
                border-radius: 5px; 
                transition: background-color 0.3s; 
            }
            .carrito-button:hover {
                background-color: #218838; 
            }
        `;
        document.head.appendChild(style);
    }
}

window.customElements.define("boton-carrito", botonCarrito);
