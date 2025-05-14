const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
  ];

  let currentIndex = 0;
  const sliderImg = document.getElementById("slider-img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showImage(index) {
    sliderImg.style.opacity = 0;
    setTimeout(() => {
      sliderImg.src = images[index];
      sliderImg.style.opacity = 0.5;
    }, 300);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function autoSlide() {
    setInterval(nextImage, 3000);
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  showImage(currentIndex);
  autoSlide();