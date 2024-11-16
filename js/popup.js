
//POP-UP

var currentImageIndex = 0;
var images = document.querySelectorAll('.popup-img');

// Abrir o pop-up
function openPopup() {
    document.getElementById("popup").style.display = "flex";
    showImage(currentImageIndex);
}

// Fechar o pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Exibir a imagem com base no índice
function showImage(index) {
    images.forEach(img => img.style.display = "none");

    if (images[index]) {
        images[index].style.display = "block";
    }
}

// Trocar a imagem
function nextImage(event) {
    if (event.target === document.getElementById("popup")) {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            closePopup();
        } else {
            showImage(currentImageIndex);
        }
    }
}

// Exibir o pop-up
document.addEventListener("DOMContentLoaded", function () {
    openPopup();
});