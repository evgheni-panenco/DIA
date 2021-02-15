function menuButtonAction() {
    var navbar = document.getElementById("nav");
    if (navbar.className === "nav") {
        navbar.className += " show"
    } else {
        navbar.className = "nav";
    }
}