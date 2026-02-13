// Depende de WA_PRIMARY y waLink() definidos en main.js
document.querySelectorAll("[data-wa-topic]").forEach((btn) => {
  const topic = btn.getAttribute("data-wa-topic");
  const msg = `Hola 👋 Estoy interesad@ en el ${topic} de Fundación Sembrando Oportunidades Cali. ¿Me puedes enviar información de fechas, cupos, requisitos y aporte solidario?`;
  btn.href = waLink(WA_PRIMARY, msg);
});
