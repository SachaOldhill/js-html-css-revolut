function activeMenu() {
  var onOffMenu = $('.fa-minus-square,.fa-bars,.ul_container');
  onOffMenu.toggleClass('js-active');
  console.log('click');
};
function activeList() {
  $('.li_active').click(function () {
    var clickLi = $(this);
    var clickedLi = clickLi.find('?');
    //non riesco a far aprire un solo ul_elem con i li
    //clickedLi.toggleClass('js-active');
    //$('.li_elem').toggleClass('js-active');
  })

}
function init() {
 $('.fa-bars,.fa-minus-square').click(activeMenu);
 activeList();
}
init();
$(document).ready(init);
