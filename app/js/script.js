window.onscroll = function () {
    stickHead();
};

var header = document.getElementById("topHeader");
var sticky = header.offsetTop;

function stickHead() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

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
