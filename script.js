function clickActive() {
    $('.fa-minus-square,.fa-bars').toggleClass('js-active');
    console.log('click');
  };

function init() {
 $('.fa-bars,.fa-minus-square').click(clickActive);
}
init();
$(document).ready(init);
