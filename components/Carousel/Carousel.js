/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// Image array for carousel

const imgSrc = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];

// Create carousel component

function carouselCreate() {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = ' < ';
  leftButton.setAttribute('onclick', 'plusSlides(-1)')
  rightButton.textContent = ' > ';
  rightButton.setAttribute('onclick', 'plusSlides(1)')

  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);

  imgSrc.forEach(el => {
    const images = document.createElement("img");
    images.classList.add('slides');
    images.src = el;
    carousel.appendChild(images);
  });

  return carousel;
}

document.querySelector('.carousel-container').appendChild(carouselCreate());

// Image carousel slideshow https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.slides');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

document.querySelector('.top-bar').style.zIndex = '9999';
