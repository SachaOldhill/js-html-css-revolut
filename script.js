function activeMenu() {
  var onOffMenu = $('.fa-minus-square,.fa-bars,.ul_container');
  onOffMenu.toggleClass('js-active');
  console.log('click');
};
function activeList() {
  $('.li_active').click(function () {
    var clickLi = $(this);
    var clickedUl = clickLi.siblings('.ul_elem');
    console.log(clickedUl);
    var clickLiElem = clickedUl.children('.li_elem');
    console.log(clickLiElem);
    clickLiElem.toggleClass('js-active');
  })

}
function init() {
 $('.fa-bars,.fa-minus-square').click(activeMenu);
 activeList();
}
init();
$(document).ready(init);
