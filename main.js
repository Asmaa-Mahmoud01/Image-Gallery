var sliderImages = Array.from(document.querySelectorAll('.slider-main img'));
var sliderNumber = sliderImages.length;
var currentSlide = 1;
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

var pagination = document.createElement('ul');
pagination.setAttribute('id', 'pag-ul');
for (i = 1; i <= sliderNumber; i++) {

    var paginationElem = document.createElement('li')

    paginationElem.setAttribute('imgIndex', i)

    pagination.appendChild(paginationElem);
};
document.getElementById('indicators').appendChild(pagination);
var paginationUl = document.getElementById('pag-ul');
var paginationBullets = Array.from(document.querySelectorAll('#pag-ul li'));

function removeActive() {
    sliderImages.forEach(function (img) {
    
        img.classList.remove('active');
    
    });
    paginationBullets.forEach(function (li) {
    
        li.classList.remove('active');
    
    });
}

function check() {

    removeActive();

    sliderImages[currentSlide - 1].classList.add('active');

    paginationBullets[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
    
        prevButton.classList.add('disabled');
    }
    else {
        prevButton.classList.remove('disabled');
    }

    if (currentSlide == sliderNumber) {
    
        nextButton.classList.add('disabled');
    }
    else {
        nextButton.classList.remove('disabled');
    }
};

for (i = 0; i < paginationBullets.length; i++) { 
    
    paginationBullets[i].onclick = function () {
    
        currentSlide = parseInt(this.getAttribute('imgIndex'));

        check();
    }
};

nextButton.onclick = nextSlide;
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
    
        return false;
    }
    else {
        currentSlide++;
        check();
    }
}

prevButton.onclick = prevSlide;
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
    
        return false;
    }
    else {
        currentSlide--;
        check();
    }
}

var autoSlideInterval = setInterval(nextSlideAuto, 2500);
function nextSlideAuto() {
    if (currentSlide === sliderNumber) {
        currentSlide = 1; 
    } else {
        currentSlide++;
    }
    check();
}

document.querySelector('.slider-main').addEventListener('mouseenter', function () {

    clearInterval(autoSlideInterval); 

});

document.querySelector('.slider-main').addEventListener('mouseleave', function () {

    autoSlideInterval = setInterval(nextSlideAuto, 2500); 

});