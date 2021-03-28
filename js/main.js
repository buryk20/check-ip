function show_hide_password(target) {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.remove('check-input-pas-icon');
        input.setAttribute('type', 'text');
    } else {
        target.classList.add('check-input-pas-icon-actively');
        input.setAttribute('type', 'password');
    }
    return false;
}
