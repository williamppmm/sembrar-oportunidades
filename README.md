# Sembrando Oportunidades

Sitio web oficial de la Fundación Sembrando Oportunidades - Cali, Colombia

## Sobre el Proyecto

Sitio web estático para la Fundación Sembrando Oportunidades, una organización sin ánimo de lucro ubicada en Cali, Colombia, que ofrece talleres prácticos dirigidos a mujeres, jóvenes y madres cabeza de hogar de zonas vulnerables.

**Eslogan:** "Sembramos habilidades, cosechamos oportunidades"

## Misión

Brindar talleres prácticos y accesibles que permitan a personas de comunidades vulnerables adquirir habilidades útiles tanto para su vida diaria como para impulsar pequeños emprendimientos.

## Talleres Actuales

- **Tratamientos Capilares**: Técnicas profesionales para el cuidado del cabello
- **Postres en Frío**: Elaboración de postres sin necesidad de horno
- **Jabones Artesanales**: Jabones naturales con macerados de plantas medicinales
- **Conservas**: Elaboración y conservación de alimentos
- **Tortas**: Repostería y decoración
- **Velas Artesanales**: Fabricación de velas decorativas y aromáticas

Cada taller tiene una duración de 8 horas (4 sesiones de 2h), con cupos de ~20 personas, dirigidos a mayores de 16 años.

## Stack Técnico

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Diseño**: Responsivo (Mobile-first)
- **Formulario de contacto**: Web3Forms (gratuito, sin backend)
- **Correo**: contacto@sembrandooportunidades.org (Zoho Mail)
- **DNS**: Cloudflare (MX, SPF, DKIM configurados)
- **Hosting**: Cloudflare Pages
- **Dominio**: sembrandooportunidades.org

## Estructura del Proyecto

```
sembrar-oportunidades/
├── assets/
│   ├── icons/
│   │   └── favicon.ico
│   └── images/
│       ├── logo1.png
│       ├── logo2.png
│       ├── poster1.png
│       └── talleres/
│           ├── capilar.png
│           ├── conservas.png
│           ├── jabones.png
│           ├── postres-frio.png
│           ├── tortas.png
│           └── velas.png
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── index.html
├── talleres.html
├── apoya.html
├── contacto.html
└── README.md
```

## Instalación y Uso

Sitio estático sin dependencias de build. Para ejecutarlo localmente:

1. Clona el repositorio:
```bash
git clone https://github.com/williamppmm/sembrar-oportunidades.git
cd sembrar-oportunidades
```

2. Levanta un servidor local:
```bash
# Con Node.js
npx serve .

# Con Python
python -m http.server 8080
```

3. Abre `http://localhost:3000` en tu navegador

> No abrir `index.html` directamente como archivo (`file://`) — el formulario de contacto requiere un servidor HTTP para funcionar correctamente.

## Formulario de Contacto

El formulario en `contacto.html` usa [Web3Forms](https://web3forms.com/) para enviar mensajes directamente a `contacto@sembrandooportunidades.org` sin necesidad de backend. Es gratuito y sin límite de envíos.

La **Access Key** de Web3Forms está configurada en el atributo `action` del formulario en `contacto.html`.

## Despliegue con Cloudflare Pages

1. Conecta el repositorio de GitHub a Cloudflare Pages
2. Configura el proyecto:
   - **Build command**: (dejar vacío)
   - **Build output directory**: `/`
3. Despliega automáticamente con cada push a `main`

## Contacto

- **Email**: contacto@sembrandooportunidades.org
- **WhatsApp**: +57 314 634 0912
- **Ubicación**: Sede CIBASURCALI, Barrio Mariano Ramos, Cali, Colombia

---

**Fundación Sembrando Oportunidades** - Cali, Colombia © 2026
