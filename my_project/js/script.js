//document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
let left = 0;
var timer;

function autoSlider() {
   timer = setTimeout(function () {
      let polosa = document.getElementById('polosa');
      left = left - 128;
      if (left < -256) {
         left = 0;
         clearTimeout(timer);
      }
      polosa.style.left = left + 'px';
      autoSlider();
   }, 1000);


}