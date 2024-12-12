function iniciarContagemRegressiva() {
    const agora = new Date();

    const meiaNoite = new Date();
    meiaNoite.setHours(24, 0, 0, 0); 

    const tempoRestante = meiaNoite - agora;

    const horas = Math.floor(tempoRestante / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("hora").innerText = formatarTempo(horas);
    document.getElementById("minuto").innerText = formatarTempo(minutos);
    document.getElementById("segundo").innerText = formatarTempo(segundos);
}

function formatarTempo(tempo) {
    return tempo < 10 ? "0" + tempo : tempo;
}

iniciarContagemRegressiva();

setInterval(iniciarContagemRegressiva, 1000);