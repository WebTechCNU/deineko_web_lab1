let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.container .logo').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});


function countChar() {

    let is_probel = document.getElementById("is_probel");
    let count_char = document.getElementById("count_char");
    let count_char_textarea = document.getElementById("count_char_textarea");


    if (is_probel.checked == false) {
        count_char.value = count_char_textarea.value.replace(/ *n*r*t*/g, "").length;
    }
    else {
        count_char.value = count_char_textarea.value.length;
    }

}

let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(acco => {
    acco.onclick = () => {
        accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        acco.classList.add('active');
    };
});




