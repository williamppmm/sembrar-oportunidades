// Números (E.164 sin "+")
const WA_PRIMARY = "573146340912";   // +57 314 634 0912

function waLink(phone, message){
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Mensajes prellenados
const MSG_GENERAL =
  "Hola 👋 Estoy interesad@ en los talleres de Fundación Sembrando Oportunidades Cali. ¿Me puedes enviar información de fechas, cupos, requisitos y aporte solidario?";

const MSG_INSTRUCTOR =
  "Hola 👋 Quiero apoyar como instructor(a) / aliado educativo. Puedo dictar un taller sobre: _____. Mi disponibilidad es: _____. ¿Cómo podemos coordinar?";

// Setear links globales si existen
const ctaTop = document.getElementById("ctaTop");
if (ctaTop) ctaTop.href = waLink(WA_PRIMARY, MSG_GENERAL);

const ctaHero = document.getElementById("ctaHero");
if (ctaHero) ctaHero.href = waLink(WA_PRIMARY, MSG_GENERAL);

const ctaInstructor = document.getElementById("ctaInstructor");
if (ctaInstructor) ctaInstructor.href = waLink(WA_PRIMARY, MSG_INSTRUCTOR);

const ctaMobile = document.getElementById("ctaMobile");
if (ctaMobile) ctaMobile.href = waLink(WA_PRIMARY, MSG_GENERAL);

const ctaContactWA = document.getElementById("ctaContactWA");
if (ctaContactWA) ctaContactWA.href = waLink(WA_PRIMARY, MSG_GENERAL);

// Inyectar número formateado en elementos con data-wa-phone
document.querySelectorAll("[data-wa-phone]").forEach(function(el){
  el.href = "https://wa.me/" + WA_PRIMARY;
  el.textContent = "+57 314 634 0912";
});

// Menú hamburguesa (móvil)
(function mobileMenu(){
  const btn = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", function(){
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });

  // Cerrar al hacer clic en un enlace
  nav.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){
      nav.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Abrir menú");
    });
  });
})();

// EmailJS — formulario de contacto
(function contactForm(){
  const form = document.getElementById("contact-form");
  if (!form) return;

  emailjs.init("DYyKZ3d-S009rlCII");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.textContent = "Enviando...";

    emailjs.sendForm("service_y9yrsrq", "hau23ve", form)
      .then(function(){
        btn.textContent = "¡Mensaje enviado!";
        form.reset();
      })
      .catch(function(error){
        btn.disabled = false;
        btn.textContent = "Enviar mensaje";
        console.error(error);
        alert("Hubo un error al enviar. Por favor escríbenos por WhatsApp.");
      });
  });
})();

// Active nav (por página)
(function setActiveNav(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.endsWith(path)) a.classList.add("active");
  });
})();
