function toggleProfileMenu() {
    var profileMenu = document.getElementById("profile-menu");
    profileMenu.style.display = (profileMenu.style.display === "block") ? "none" : "block";
}
function brightenText(element) {
    // Add the 'brighten' class to the clicked menu item
    element.classList.add("brighten");
    // Remove the 'brighten' class after a delay (you can adjust the delay as needed)
    setTimeout(function () {
        element.classList.remove("brighten");
    }, 500);
}
function redirectToAnotherPage(){
    window.location.href='form.html'
}
