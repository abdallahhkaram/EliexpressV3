$("#header").load("./app/html/header.html");
$("#info").load("./app/html/info.html");
$("#footer").load("./app/html/footer.html");

$(window).on("load", function () {
    $(".loader-wrapper").delay(100).fadeOut("slow");
});
function menuOnClick() {
    document.getElementById("ham").classList.toggle("change");
    document.getElementById("hamLinks").classList.toggle("ham-link-close");
}

//////// lang selectopr
function mobileDrop() {
    document.getElementById("mobileDrop").classList.toggle("mobile-drop-shown");
    document.getElementById("mobileToggle").classList.toggle("mobileToggle");
}

///// header click
