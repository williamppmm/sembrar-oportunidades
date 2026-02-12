# Sembrando Oportunidades

Sitio web oficial de la Fundación Sembrando Oportunidades - Cali, Colombia

## 🌱 Sobre el Proyecto

Sitio web estático para la Fundación Sembrando Oportunidades, una organización sin ánimo de lucro ubicada en Cali, Colombia, que ofrece talleres prácticos dirigidos a mujeres, jóvenes y madres cabeza de hogar de zonas vulnerables.

**Eslogan:** "Sembramos habilidades, cosechamos oportunidades"

## 🎯 Misión

Brindar talleres prácticos y accesibles que permitan a personas de comunidades vulnerables adquirir habilidades útiles tanto para su vida diaria como para impulsar pequeños emprendimientos.

## 📚 Talleres Actuales

- **Tratamientos Capilares**: Técnicas profesionales para el cuidado del cabello
- **Postres en Frío**: Elaboración de postres sin necesidad de horno
- **Jabones Artesanales**: Jabones naturales con macerados de plantas medicinales

Cada taller tiene una duración de 8 horas (4 sesiones de 2h), con cupos de ~20 personas, dirigidos a mayores de 16 años.

## 🛠️ Stack Técnico

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Diseño**: Responsivo (Mobile-first)
- **Hosting**: Cloudflare Pages (recomendado)
- **Dominio**: sembrandooportunidades.org

## 📁 Estructura del Proyecto

```
sembrando/
├── public/
│   ├── images/
│   │   ├── logo1.png
│   │   ├── logo2.png
│   │   ├── poster-talleres.png
│   │   └── favicon.png
│   └── icons/
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── index.html
├── talleres.html
├── contacto.html
└── README.md
```

## 🚀 Instalación y Uso

Este es un sitio estático sin dependencias. Para ejecutarlo localmente:

1. Clona el repositorio:
```bash
git clone https://github.com/williamppmm/sembrar-oportunidades.git
cd sembrar-oportunidades
```

2. Abre `index.html` en tu navegador, o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

3. Visita `http://localhost:8000` en tu navegador

## 📦 Despliegue con Cloudflare Pages

1. Conecta tu repositorio de GitHub a Cloudflare Pages
2. Configura el proyecto:
   - **Build command**: (dejar vacío)
   - **Build output directory**: `/`
3. Despliega automáticamente con cada push a `main`

## 📱 Contacto

- **WhatsApp**: +57 312 763 0952
- **Ubicación**: Sede CIBASURCALI, Barrio Mariano Ramos, Cali, Colombia

## 🤝 Contribuir

¿Quieres mejorar el sitio? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible para la comunidad.

## 👥 Instructores y Aliados

Si tienes una habilidad práctica que quieras compartir y deseas ser instructor voluntario, contáctanos por WhatsApp.

---

**Fundación Sembrando Oportunidades** - Cali, Colombia © 2026
