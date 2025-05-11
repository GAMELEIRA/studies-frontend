const showModality = (modality) => {
    if (modality === 1) {
        document.getElementById('athlete').src = 'images/atleta-ciclista.png';
    } else if (modality === 2) {
        document.getElementById('athlete').src = 'images/atleta-correndo.png';
    } else if (modality === 3) {
        document.getElementById('athlete').src = 'images/atleta-nadando.png';
    }
}