<script>
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Samenbeng Travel & Tour Website Loaded");

    // ===== Hamburger Menu Toggle =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }

    // ===== Background Image Auto-Slider =====
    const images = [
      'images/dubai.jpg',
      'images/newyork.jpg',
      'images/london.jpg',
      'images/singapore.jpg',
      'images/toronto.jpg'
    ];

    let currentImage = 0;
    const hero = document.querySelector('.hero-section');

    if (hero) {
      function slideImages() {
        currentImage = (currentImage + 1) % images.length;
        hero.style.backgroundImage = `url('${images[currentImage]}')`;
      }

      // Initial background
      hero.style.backgroundImage = `url('${images[0]}')`;

      // Start background slider every 5 seconds
      setInterval(slideImages, 5000);
    }

    // ===== Optional Slide Transition (e.g., for testimonials or banners) =====
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    if (slides.length > 0) {
      function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }

      setInterval(nextSlide, 5000); // change every 5 seconds
    }
  });
</script>
