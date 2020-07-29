jQuery(document).ready(function(){
  removeFooter();
});


function removeFooter() {
  jQuery("#footer").remove();
  jQuery("body").removeClass("fluida-elementborder");
}