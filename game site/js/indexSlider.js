const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  if (index >= slider.children.length) {
      slideIndex = 0;
  } 
  else if (index < 0) {
    slideIndex = slider.children.length - 1;
  } 
  else {
    slideIndex = index;
  }
            
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
            
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === slideIndex);
    });
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
showSlide(slideIndex - 1);
  stopAutoSlide();
  startAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    stopAutoSlide();
    startAutoSlide();
  });
});

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();