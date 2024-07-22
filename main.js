let slideIndex = 1;

const showSlides = (n) => {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    dots.forEach((dot) => {
        dot.className = dot.className.replace(' active', '');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
});

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index + 1);
    });
});

document.querySelectorAll('.slide img').forEach((img) => {
    img.addEventListener('click', () => {
        openImageView(img.src);
    });
});

document.getElementById('imageViewClose').addEventListener('click', closeImageView);

function openImageView(src) {
    document.getElementById('largeImage').src = src;
    document.getElementById('imageView').style.display = 'flex';
}

function closeImageView() {
    document.getElementById('imageView').style.display = 'none';
}

showSlides(slideIndex);
