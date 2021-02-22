$("#header").load("./app/html/header.html");
$("#info").load("./app/html/info.html");
$("#footer").load("./app/html/footer.html");
$(window).on("load", function () {
    $(".loader-wrapper").delay(1000).fadeOut("slow");
});

function menuOnClick() {
    document.getElementById("ham").classList.toggle("change");
    document.getElementById("hamLinks").classList.toggle("ham-link-close");
}

// Get the modal
var modal = document.getElementById("loginModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        document.body.style.overflow = "visible";
        modal.style.display = "none";
    }
};

//////// lang selectopr
function mobileDrop() {
    document.getElementById("mobileDrop").classList.toggle("mobile-drop-shown");
    document.getElementById("mobileToggle").classList.toggle("mobileToggle");
}
