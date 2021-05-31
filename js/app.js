function displayCountdown() {
    // Release Date
    const releaseDate = new Date('April 10, 2020 00:00:00').getTime();

    const countdown = setInterval( () => {

        // Gets Current Date & Distance Between Release Date
        const currentDate = new Date().getTime();
        const distance = releaseDate - currentDate;

        // Calculates Days/Hours/Minutes/Seconds Left
        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

        // Gets Days/Hours/Minutes/Seconds and Displays it
        const showDay = document.getElementById('days');
        showDay.textContent = daysLeft;

        const showHours = document.getElementById('hours');
        showHours.textContent = hoursLeft;

        const showMinutes = document.getElementById('mins');
        showMinutes.textContent = minutesLeft;

        const showSeconds = document.getElementById('secs');
        showSeconds.textContent = secondsLeft;

        // Gets Countdown Container
        const getCountdownContainer = document.getElementById('countdown');

        // When countdown reaches release date
        if (distance < 0 ) {
            clearInterval(getCountdownContainer);

            getCountdownContainer.style.display = 'none';

            const getMainHeading = document.querySelector('.primary-heading--main');
            getMainHeading.textContent = 'Available'

            const getSubHeading = document.querySelector('.primary-heading--sub');
            getSubHeading.textContent = 'Now'

            // Replaces Text
            const checkAvailability = document.querySelectorAll('#availability');
            checkAvailability.forEach(function (checkAvailability) {
                checkAvailability.textContent = 'Purchase';
            });
        };
    }, 1000);
};

// Displays Countdown
displayCountdown();


//////////////////////////////////////////////////////////////////////////////////
// Purchase Button Scrolling
const btnScrollTo = document.querySelector('.btn--main');

btnScrollTo.addEventListener('click', function(e) {
    e.preventDefault();
    const btnID = e.target.getAttribute('href');
    document.querySelector(btnID).scrollIntoView({ behavior: 'smooth' })
});


//////////////////////////////////////////////////////////////////////////////////
// Image Gallery
const getGallery = document.querySelector('.gallery');

function displayScreenshots() {
    const inGameScreenshots = [
        "media/screenshots/1.jpg",
        "media/screenshots/2.jpg",
        "media/screenshots/3.jpg",
        "media/screenshots/4.jpg",
        "media/screenshots/5.jpg",
        "media/screenshots/6.jpg",
        "media/screenshots/7.jpg",
        "media/screenshots/8.jpg",
        "media/screenshots/9.jpg",
        "media/screenshots/10.jpg",
        "media/screenshots/11.jpg",
        "media/screenshots/12.jpg",
        "media/screenshots/13.jpg",
        "media/screenshots/14.jpg",
        "media/screenshots/15.jpg",
        "media/screenshots/16.jpg",
        "media/screenshots/17.jpg",
        "media/screenshots/18.jpg",
        "media/screenshots/19.jpg",
        "media/screenshots/20.jpg",
        "media/screenshots/21.jpg",
        "media/screenshots/22.jpg",
        "media/screenshots/23.jpg",
        "media/screenshots/24.jpg",
        "media/screenshots/25.jpg",
        "media/screenshots/26.jpg",
        "media/screenshots/27.jpg",
        "media/screenshots/28.jpg",
        "media/screenshots/29.jpg",
        "media/screenshots/30.jpg"
    ];

    const createImages = function() {

        inGameScreenshots.forEach(function(img) {
            getGallery.insertAdjacentHTML('beforeend', `
                <div class="gallery__container">
                    <img src="${img}" class="gallery__img">
                </div>
            `);
        })
    }
    createImages()
};
displayScreenshots();



//////////////////////////////////////////////////////////////////////////////////
// Modal Window

const galleryImg = document.querySelectorAll('.gallery__img')
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.modal__close');
const imgContainer = document.querySelectorAll('.gallery__container')

// Displays Modal / Adds Img Source
const openModal = function (e) {
    e.preventDefault();

    // Matching Strategy / Selects Targeted Img
    if (e.target.classList.contains('gallery__img')) {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        // Adds Targeted Image to Modal
        const imgClicked = e.target.getAttribute('src');
        modalContent.innerHTML = ' ';
        modalContent.insertAdjacentHTML('beforeend', `<img src="${imgClicked}" class="modal__img">`)
    }
};


// Closes Modal / Removes Img Source
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Event Handlers
getGallery.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


//////////////////////////////////////////////////////////////////////////////////
// Navigation Button Toggle
const navigationBtnContainer = document.querySelector('.navigation__button');
const navigationBtn = document.querySelector('.navigation__button--toggle');
const navigationContainer = document.querySelector('.navigation__background');

const hideNav = function() {
    navigationBtn.classList.add('fa-bars');
    navigationBtn.classList.remove('fa-times');
    navigationContainer.classList.remove('navigation__active')
    navigationBtnContainer.classList.remove('navigation__button-hide')
}

const displayNav = function() {
    navigationBtn.classList.remove('fa-bars');
    navigationBtn.classList.add('fa-times');
    navigationContainer.classList.add('navigation__active')
    navigationBtnContainer.classList.add('navigation__button-hide')
}

navigationBtn.addEventListener('click', function() {
    navigationBtn.classList.contains('fa-bars') ? displayNav() : hideNav();
})



//////////////////////////////////////////////////////////////////////////////////
// Page Navigation Links: Smooth Scrolling
document.querySelector('.navigation__list').addEventListener('click', function(e) {
    e.preventDefault();

    // Matching Strategy
    if (e.target.classList.contains('navigation__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

        if (navigationContainer.classList.contains('navigation__active')) {
            hideNav();
        }
    }
})



//////////////////////////////////////////////////////////////////////////////////
// Trailer Slideshow
const trailer = document.querySelector('.trailer__current');
const prevTrailer = document.querySelector('.dots__prev');
const nextTrailer = document.querySelector('.dots__next');
const dotsContainer = document.querySelector('.dots')

const trailerSrc = [
    'https://www.youtube.com/embed/YsXnDKAv_h8?rel=0',
    'https://www.youtube.com/embed/DTjvkpAEtZA?rel=0',
    'https://www.youtube.com/embed/F7bEoGile7Q?rel=0',
    'https://www.youtube.com/embed/72Y7DplcyR8?rel=0',
    'https://www.youtube.com/embed/KdxFyobNsHA?rel=0',
    'https://www.youtube.com/embed/8IrheLf0Ki0?rel=0',
    'https://www.youtube.com/embed/3alSpW18SnE?rel=0',
    'https://www.youtube.com/embed/tEPb8uQ27BI?rel=0',
    'https://www.youtube.com/embed/GBpq_Jq7yn0?rel=0',
    'https://www.youtube.com/embed/pCJZg7pVtiI?rel=0',
    'https://www.youtube.com/embed/aTCmN8TtkgQ?rel=0',
    'https://www.youtube.com/embed/qOn2bWuA_0w?rel=0',
    'https://www.youtube.com/embed/Kznek1uNVsg?rel=0'
];

// Creates Dots Containing Trailer data-src
trailerSrc.forEach(function(source, i) {
    const createDots = `<button class="dots__dot" data-src="${source}" id="${i + 1}"></button>`;
    dotsContainer.insertAdjacentHTML('beforeend', createDots)
})



// Gets Dots
const dots = document.querySelectorAll('.dots__dot');

// Current Slide
let curTrailer = 1;

// Displays Trailer
displayTrailer(curTrailer);

// Activates Current Dot Displaying Trailer
const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[id="${slide}"]`).classList.add('dots__dot--active')
}
activateDot(curTrailer)


// Goes To Previous Trailer
function minusTrailers() {
    displayTrailer(curTrailer -= 1);
    activateDot(curTrailer)
}


// Goes To Next Trailer
function plusTrailers() {
    displayTrailer(curTrailer += 1);
    activateDot(curTrailer)
}


// Gets Trailer from Dot
function displayTrailer(cur) {

    if (cur > dots.length) {
        curTrailer = 1;
    };

    // If curTrailer is less than 1
    if (cur < 1) {
        curTrailer = dots.length;
    };

    trailer.src = dots[curTrailer - 1].dataset.src;
}

// Keeps Track of Current Trailer for Dots
function currentTrailer(n) {
    displayTrailer(curTrailer = n);
}



/////////////////
// Event Listeners
prevTrailer.addEventListener('click', minusTrailers);
nextTrailer.addEventListener('click', plusTrailers);

// Dots on Click Changes Current Trailer
dots.forEach(function (curDot) {
    curDot.addEventListener('click', function() {

        var dotID = Number(curDot.id);
        currentTrailer(dotID)
        activateDot(curTrailer)
        trailer.src = curDot.dataset.src
    });
});


//////////////////////////////////////////////////////////////////////////////////
// Game Editions Tabs

// Selects Editions, Editions Container, Editions Contents
const editions = document.querySelectorAll('.btn--editions');
const editionsContainer = document.querySelector('.purchase__editions');
const editionsContent = document.querySelectorAll('.purchase__content')

// Purchase Editions Tab on Click
editionsContainer.addEventListener('click', function(e) {

    // Selects Targeted Tab
    const clicked = e.target.closest('.btn--editions');

    // Gaurd Clause / Prevents Null Error
    if (!clicked) return;

    // Adds Active Class to Edition Tab
    editions.forEach(ed => ed.classList.remove('btn--editions-active'));  // ed = Editions
    clicked.classList.add('btn--editions-active')

    // Active Container Goes Here
    editionsContent.forEach(ec => ec.classList.remove('purchase__content--active'));  // ec = Editions Content
    document.querySelector(`.purchase__content--${clicked.dataset.tab}`).classList.add('purchase__content--active')
});