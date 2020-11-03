var slideIndex = 1;
mostrarSlides(slideIndex);

function plusSlides(n) {
    mostrarSlides(slideIndex += n);
}


function mostrarSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-projetos");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000);
});

