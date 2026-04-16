function scrollToSection() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}

function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado-imc');

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let categoria = "";
        if (imc < 18.5) categoria = "Bajo peso";
        else if (imc < 25) categoria = "Normal";
        else categoria = "Sobrepeso";
        
        resultado.innerHTML = `Tu IMC es <strong>${imc}</strong> (${categoria}).`;
    } else {
        resultado.innerText = "Por favor ingresa valores válidos.";
    }
}

function registrarUsuario(event) {
    event.preventDefault();
    alert("¡Reserva confirmada! Se ha enviado un código QR a tu correo institucional.");
    cerrarModal('modal-registro');
}

function verTip() {
    const tips = [
        "Bebe al menos 500ml de agua antes de entrenar.",
        "No olvides calentar 10 minutos para evitar lesiones.",
        "Prioriza la técnica sobre el peso en tus ejercicios.",
        "El descanso es igual de importante que el entrenamiento."
    ];
    const azar = Math.floor(Math.random() * tips.length);
    alert("Tip del día: " + tips[azar]);
}

function verAforo() {
    const num = Math.floor(Math.random() * 40);
    document.getElementById('status-aforo').innerText = `${num}/40 personas`;
    document.querySelector('.progress-fill').style.width = (num/40*100) + "%";
}