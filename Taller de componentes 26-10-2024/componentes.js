class TopBanner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .banner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 25px;
                background: linear-gradient(135deg, #2193b0, #6dd5ed);
                border-radius: 10px;
                margin-bottom: 20px;
                color: white;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                font-family: 'Arial', sans-serif;
            }
            .date-time {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .chat-link {
                text-decoration: none;
                color: #333;
                background-color: rgba(255, 255, 255, 0.2);
                padding: 8px 20px;
                border-radius: 20px;
                transition: all 0.3s ease;
                font-weight: bold;
            }
            .chat-link:hover {
                background-color: rgba(255, 255, 255, 0.3);
                transform: translateY(-2px);
            }
        </style>
        <div class="banner">
            <div class="date-time">
                ${this.getCurrentDate()}
            </div>
            <div class="date-time">
                <h3> Bienvenidos son las: </h3><span id="current-time">${this.getCurrentTime()}</span>
            </div>
            <a href="https://chat.openai.com" target="_blank" class="chat-link">
                Ir a ChatGPT
            </a>
        </div>
        `;

        // Actualiza la hora cada segundo
        setInterval(() => {
            const timeElement = shadowRoot.querySelector('#current-time');
            timeElement.textContent = this.getCurrentTime();
        }, 1000);
    }

    getCurrentDate() {
        const today = new Date();
        return today.toLocaleDateString('es-ES');
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('es-ES');
    }
}

customElements.define("top-banner", TopBanner);


class BuscarChatGPT extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
        <style>
            .search-container {
                margin: 20px 0;
                width: 100%;
            }
            .search-input {
                width: 100%;
                padding: 10px;
                border: 2px solid #007bff;
                border-radius: 20px;
                outline: none;
                font-size: 16px;
                font-family: 'Arial', sans-serif;
                transition: border-color 0.3s;
            }
            .search-input:focus {
                border-color: #CD5C5C;
            }
            input::placeholder {
            text-align: center;
              }
        </style>
        <div class="search-container">
            <input type="text" class="search-input" placeholder="Buscar con ChatGPT">
        </div>
        `;
    }
}

customElements.define("buscar-chatgpt", BuscarChatGPT);


class CartaProducto extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .card {
                background: white;
                border-radius: 15px;
                padding: 15px;
                width: 250px;
                margin: 10px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
                font-family: 'Arial', sans-serif;
            }
            .card:hover {
                transform: translateY(-5px);
            }
            .image-container {
                height: 200px;
                border-radius: 10px;
                margin-bottom: 15px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f5f5f5;
            }
            .image-container img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
                transition: transform 0.3s ease;
            }
            .card:hover .image-container img {
                transform: scale(1.05);
            }
            .details {
                text-align: center;
                margin-bottom: 15px;
                padding: 0 10px;
            }
            .product-name {
                font-weight: bold;
                color: #333;
                margin-bottom: 8px;
                font-size: 1.1em;
            }
            .product-price {
                color: #007bff;
                font-weight: bold;
                font-size: 1.2em;
            }
            .cart-button {
                width: 100%;
                padding: 10px;
                background: #007bff;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                font-weight: bold;
                transition: background-color 0.3s;
            }
            .cart-button:hover {
                background: #0056b3;
            }
        </style>
        <div class="card">
            <div class="image-container">
                <img src="https://coopasan.com.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTUxMzY4NCwicHVyIjoiYmxvYl9pZCJ9fQ==--ee6f0a9e4ce292b68c8dc4b9e2812d3dbd547be6/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZml0IjpbNjAwLDYwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--db42ba722be1e76788976c3dae164d352f833ae3/ME00047.png?locale=es" alt="Producto">
            </div>
            <div class="details">
                <div class="product-name">Botella de Agua</div>
                <div class="product-price">$1000 pesos</div>
            </div>
            <button class="cart-button">Ir al carrito</button>
        </div>
        `;
    }
}

customElements.define("carta-producto", CartaProducto);



class DonFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            div {
                background: linear-gradient(135deg, #2193b0, #6dd5ed);
                border-radius: 8px;
                box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                width: 100%;
                padding: 15px;
                margin: 20px 0;
                text-align: center;
                font-family: 'Arial', sans-serif;
                font-weight: bold;
                color: #333;
            }
        </style>
        <div>Derechos reservados El profe barrientos</div>
        `;
    }
}

customElements.define("el-footer", DonFooter);

