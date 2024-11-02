// Componente Carta 
class CartaContenedor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.className = 'card-wrapper';
        
        const card = document.createElement('div');
        card.className = 'card';
        
        const content = document.createElement('div');
        content.innerHTML = '<slot></slot>';

        const style = document.createElement('style');
        style.textContent = `
            .card-wrapper {
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f5f5f5;
                padding: 20px;
            }
            .card {
                background: white;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
                width: 100%;
                max-width: 500px;
                animation: fadeIn 0.5s ease-out;
            }
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            ::slotted(*) {
                margin: 15px 0;
            }
        `;

        card.appendChild(content);
        wrapper.appendChild(card);
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}
customElements.define('carta-contenedor', CartaContenedor);

// [Los componentes anteriores se mantienen igual...]
// SpanAyuda
class SpanAyuda extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); 

        const span = document.createElement('span');
        span.textContent = this.textContent;

        const style = document.createElement('style');
        style.textContent = `
          span {
            display: inline-block;
            background-color: #e0f7fa;
            color: #00796b;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            margin: 5px 0;
            border: 1px solid #b2ebf2;
          }
          span::before {
            content: '💡';
            margin-right: 5px;
          }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(span);
    }
}
customElements.define('ayuda-span', SpanAyuda);

// BotonNotificacion
class BotonNotificacion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        const button = document.createElement('button');
        const icon = document.createElement('span');
        icon.innerHTML = '🔔';
        button.appendChild(icon);
        button.appendChild(document.createTextNode('Notificaciones'));

        const style = document.createElement('style');
        style.textContent = `
            button {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 20px;
                background-color: #2196f3;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.3s;
                width: 100%;
                justify-content: center;
            }
            button:hover {
                background-color: #1976d2;
            }
            span {
                font-size: 18px;
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(button);
    }
}
customElements.define('boton-notificacion', BotonNotificacion);

// ContraseñaInput
class ContraseñaInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('div');
        const input = document.createElement('input');
        const button = document.createElement('button');
        const errorMsg = document.createElement('span');

        input.type = 'password';
        input.placeholder = 'Ingrese su contraseña';
        button.textContent = 'Enviar';
        errorMsg.className = 'error-message';

        button.addEventListener('click', () => {
            if (input.value.length < 6) {
                errorMsg.textContent = 'La contraseña debe tener al menos 6 caracteres';
                return;
            }
            const encrypted = btoa(input.value);
            console.log('Contraseña encriptada:', encrypted);
            errorMsg.textContent = 'Contraseña enviada con éxito';
            errorMsg.style.color = '#4caf50';
            input.value = '';
        });

        const style = document.createElement('style');
        style.textContent = `
            div {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 100%;
            }
            input {
                padding: 10px;
                border: 2px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
                transition: border-color 0.3s;
                width: 100%;
                box-sizing: border-box;
            }
            input:focus {
                outline: none;
                border-color: #2196f3;
            }
            button {
                padding: 10px 20px;
                background-color: #4caf50;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                width: 100%;
            }
            button:hover {
                background-color: #388e3c;
            }
            .error-message {
                color: #f44336;
                font-size: 14px;
                text-align: center;
            }
        `;

        wrapper.appendChild(input);
        wrapper.appendChild(button);
        wrapper.appendChild(errorMsg);
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}
customElements.define('contrasena-input', ContraseñaInput);

// CuponDescuento
class CuponDescuento extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('div');
        const input = document.createElement('input');
        const button = document.createElement('button');
        const message = document.createElement('span');

        input.type = 'text';
        input.placeholder = 'Ingrese su cupón de descuento';
        button.textContent = 'Aplicar';
        message.className = 'message';

        button.addEventListener('click', () => {
            if (input.value.trim() === '') {
                message.textContent = 'Por favor ingrese un cupón';
                message.style.color = '#f44336';
                return;
            }
            message.textContent = `¡Cupón "${input.value}" aplicado con éxito!`;
            message.style.color = '#4caf50';
            input.value = '';
        });

        const style = document.createElement('style');
        style.textContent = `
            div {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 100%;
            }
            input {
                padding: 10px;
                border: 2px dashed red;
                border-radius: 4px;
                font-size: 16px;
                width: 100%;
                box-sizing: border-box;
            }
            input:focus {
                outline: none;
                border-color: #2196f3;
            }
            button {
                padding: 10px 20px;
                background-color: #ff9800;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                width: 100%;
            }
            button:hover {
                background-color: #f57c00;
            }
            .message {
                font-size: 14px;
                text-align: center;
            }
        `;

        wrapper.appendChild(input);
        wrapper.appendChild(button);
        wrapper.appendChild(message);
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}
customElements.define('cupon-descuento', CuponDescuento);

// PaginaSeccion
class PaginaSeccion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        const section = document.createElement('section');
        const title = document.createElement('h2');
        const content = document.createElement('div');

        title.textContent = this.getAttribute('title') || 'Sección';
        content.innerHTML = '<slot></slot>';

        const style = document.createElement('style');
        style.textContent = `
            section {
                padding: 20px 0;
            }
            h2 {
                color: #333;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #eee;
                text-align: center;
            }
            ::slotted(*) {
                margin: 10px 0;
            }
        `;

        section.appendChild(title);
        section.appendChild(content);
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(section);
    }
}
customElements.define('pagina-seccion', PaginaSeccion);