// ==================== Mobile Menu Toggle ====================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// ==================== Formulario de Contacto ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const motivo = document.getElementById('motivo').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Crear mensaje para WhatsApp
        let whatsappMsg = `Hola! Me contacto desde el sitio web.\n\n`;
        whatsappMsg += `*Nombre:* ${nombre}\n`;
        whatsappMsg += `*Teléfono:* ${telefono}\n`;
        if (email) whatsappMsg += `*Email:* ${email}\n`;
        whatsappMsg += `*Motivo:* ${motivo}\n\n`;
        whatsappMsg += `*Mensaje:*\n${mensaje}`;
        
        // Codificar el mensaje para URL
        const encodedMsg = encodeURIComponent(whatsappMsg);
        
        // Abrir WhatsApp
        window.open(`https://wa.me/573127630952?text=${encodedMsg}`, '_blank');
        
        // Resetear formulario
        contactForm.reset();
        
        // Mostrar mensaje de confirmación
        alert('¡Gracias por contactarnos! Te redirigiremos a WhatsApp para completar tu mensaje.');
    });
}

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Active Nav Link on Scroll ====================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// ==================== Animaciones al hacer scroll ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a tarjetas y secciones
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.taller-card, .info-card, .faq__item, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
