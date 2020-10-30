/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

document.querySelector('.carousel-container').appendChild(createCarousel());

function createCarousel () {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img1.setAttribute("src", "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg");
  img2.setAttribute("src", "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg");
  img3.setAttribute("src", "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg");
  img4.setAttribute("src", "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg");

  img1.setAttribute("id", "img1");
  img2.setAttribute("id", "img2");
  img3.setAttribute("id", "img3");
  img4.setAttribute("id", "img4");

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  img1.style.display = "block";
  let counter = 1;

  leftButton.addEventListener('click', () => {
    const startImg = document.querySelector(`#img${counter}`);
    startImg.classList.remove("animation");
    startImg.style.display = "none";
    counter = counter - 1;
    if (counter < 1) { counter = 4}
    const endImg = document.querySelector(`#img${counter}`);
    endImg.style.display = "block";
    endImg.classList.add("animation");
  })
  rightButton.addEventListener('click', () => {
    const startImg = document.querySelector(`#img${counter}`);
    startImg.classList.remove("animation");
    startImg.style.display = "none";
    counter = counter + 1;
    if (counter > 4) { counter = 1}
    const endImg = document.querySelector(`#img${counter}`);
    endImg.style.display = "block";
    endImg.classList.add("animation");
  })

  return carousel;
}