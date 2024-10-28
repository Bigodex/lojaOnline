let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const imageWrapper = document.querySelector('.img-wrapper');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
  });
  images[index].classList.add('active');
  imageWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function moveCarousel(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  showImage(currentImageIndex);
}

function autoRotate() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

// Inicializa o carrossel exibindo a primeira imagem
showImage(currentImageIndex);

// Define o intervalo de 5 segundos para a rotação automática
setInterval(autoRotate, 10000);
