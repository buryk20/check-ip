function show_hide_password() {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        document.getElementsByClassName('check-input-pas-icon')[0].style.display = "none";
        document.getElementsByClassName('check-input-pas-icon-actively-none')[0].style.display = "block";
        input.setAttribute('type', 'text');
    } else {
        document.getElementsByClassName('check-input-pas-icon')[0].style.display = "block";
        document.getElementsByClassName('check-input-pas-icon-actively-none')[0].style.display = "none";
        input.setAttribute('type', 'password');
    }
    return false;
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-in-delete-img")) {
        e.target.parentElement.querySelector(".check-input").value = "";
    }
})