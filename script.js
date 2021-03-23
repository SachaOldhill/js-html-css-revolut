function clickActive() {
    $('.ul_container').addClass('js-active');
    console.log('click');
  };

function init() {
 $('.fa-bars').click(clickActive);
}

$(document).ready(init);
