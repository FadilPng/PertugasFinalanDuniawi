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

    function submitForm(event) {
      event.preventDefault(); // cegah reload halaman
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const prodi = document.getElementById("prodi").value;

      alert("Pendaftaran berhasil!\n\nNama: " + nama + "\nEmail: " + email + "\nProgram Studi: " + prodi);

      // Reset form setelah submit
      event.target.reset();
    }
  
// untuk pindah gambarnya otomatis
setInterval(() => {
    nextSlide();
    }, 5000);
