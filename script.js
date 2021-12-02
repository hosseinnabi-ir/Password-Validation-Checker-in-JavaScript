const password = document.querySelector('.container .password');
const showHide = document.querySelector('.container #showHide');

function valid(item) {
    let text = document.querySelector(`#${item}`);
    let checkIcon = document.querySelector(`#${item} .fa-check`);
    let timesIcon = document.querySelector(`#${item} .fa-times`);
    text.style.opacity = '1';  
    checkIcon.style.opacity = '1';  
    timesIcon.style.opacity = '0';  
}

function invalid(item) {
    let text = document.querySelector(`#${item}`);
    let checkIcon = document.querySelector(`#${item} .fa-check`);
    let timesIcon = document.querySelector(`#${item} .fa-times`);
    text.style.opacity = '.5';  
    checkIcon.style.opacity = '0';  
    timesIcon.style.opacity = '1';  
}

password.addEventListener('input', () => {

    if (password.value.match(/[A-Z]/) != null)
        valid('capitals');
    else
        invalid('capitals');

    if (password.value.match(/[0-9]/) != null)
        valid('numbers');
    else
        invalid('numbers');

    if (password.value.match(/[!@#$%^&*()]/) != null)
        valid('characters');
    else
        invalid('characters');

    if (password.value.length > 7)
        valid('more8');
    else
        invalid('more8');

});

showHide.addEventListener('click', () => {

    if (showHide.className == "fas fa-eye") {
        showHide.className = "fas fa-eye-slash";
        password.type = "text";
    }
    else {
        showHide.className = "fas fa-eye";
        password.type = "password";
    }

});