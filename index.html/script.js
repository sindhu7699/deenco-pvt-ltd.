let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;

function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    track.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Initialize the carousel
showSlide(currentIndex);
