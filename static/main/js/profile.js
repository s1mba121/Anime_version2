//header_slider
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const buttons = document.querySelectorAll(".block_buttons button");
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.style.transition = "transform 0.5s ease";
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
    }
  
    buttons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    showSlide(currentIndex);
  });
  //settings_slider
  const slides = document.querySelector('.settings_slides');
  const slideHeight = document.querySelector('.settings_slide').clientHeight;
  
  function goToSlide(index) {
    slides.style.transform = `translateY(-${index * slideHeight}px)`;
  }
  