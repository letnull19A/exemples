$(document).ready(function () {
    $(document).scroll(function () {
        var scroll = $(document).scrollTop();
        var headerClass = $(".header");
        if (scroll >= 500) {
            headerClass.removeClass("bg-alpha").addClass("bg-white border-bottom");
        } else {
            headerClass.removeClass("bg-white border-bottom").addClass("bg-alpha");
        }
    });
});