jQuery(document).ready(function() {
    jQuery('.toggle--nav').click(function(e) {
    jQuery(this).toggleClass('active--btn');
    jQuery('.nav--list').toggleClass('active');
    e.preventDefault();
    });
});