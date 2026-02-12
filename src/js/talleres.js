const WA_PRIMARY = "573127630952";

function waLink(phone, message){
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-wa-topic]").forEach((btn) => {
  const topic = btn.getAttribute("data-wa-topic");
  const msg = `Hola 👋 Estoy interesad@ en el ${topic} de Fundación Sembrando Oportunidades Cali. ¿Me puedes enviar información de fechas, cupos, requisitos y aporte solidario?`;
  btn.href = waLink(WA_PRIMARY, msg);
});