
// mask whatsapp
document.getElementById('whatsapp').addEventListener('input', function (e) {
    const x = e.target.value
        .replace(/\D/g, '')
        .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

//function
function btnSend() {
    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const solucao = document.getElementById('solucao').value;
    const message = document.getElementById('message').value;
    
    if (name && whatsapp && solucao && message) { 
        checkWhatsapp();
    } else {
        Swal.fire({
            title: "Ops...",
            text: "Preencha todos os campos.",
            icon: "error"
        });
    }
}

//verifica se o campo whatsapp está preenchido
function checkWhatsapp() {
    const whatsapp = document.getElementById('whatsapp').value; 
    if (whatsapp.length < 15) {
        Swal.fire({
            title: "Ops...",
            text: "Preencha o WhatsApp corretamente.",
            icon: "error"
        });
    } else {
        Swal.fire({
            title: "Sucesso!",
            text: "Envie sua mensagem pra gente no WhatsApp.",
            icon: "success"
        });
        sendContact();
    }
}

//contact
function sendContact() {
    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const solucao = document.getElementById('solucao').value;
    const message = document.getElementById('message').value;

    // Formata a mensagem com emojis e quebras de linha
    const textoWhatsApp = `👋 *Olá!*%0A%0A✨ Meu nome é *${name}*.%0A📱 Meu WhatsApp é: *${whatsapp}*
    .%0A🔍 Solução desejada: *${solucao}*.%0A💬 Gostaria de falar sobre:%0A*${message}*%0A%0A📝 *Aguardo o seu retorno!*`;
        
    // URL do WhatsApp com a mensagem
    const urlWhatsApp = `https://wa.me/5531999105993?text=${textoWhatsApp}`; // Troque pelo número do WhatsApp
    
    // Abre a mensagem no WhatsApp
    window.open(urlWhatsApp, '_blank');
}
