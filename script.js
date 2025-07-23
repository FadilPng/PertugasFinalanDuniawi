// untuk slider fotonya
const imagePaths = [
    'assets/kampus1.jpg',
    'assets/kampus2.jpg',
    'assets/kampus3.jpg',
    'assets/kampus4.jpg',
    ];
  
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-img');
  
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
});
  
currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    }
  
function nextSlide() {
    showSlide(currentIndex + 1);
    }
  
function prevSlide() {
    showSlide(currentIndex - 1);
    }
  
// untuk pindah gambarnya otomatis
setInterval(() => {
    nextSlide();
    }, 5000);