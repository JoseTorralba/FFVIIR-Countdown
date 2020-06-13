// Document on Ready
document.addEventListener('DOMContentLoaded', function() {
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

                var getMainHeading = document.querySelector('.primary-heading--main');
                getMainHeading.textContent = 'Available'

                var getSubHeading = document.querySelector('.primary-heading--sub');
                getSubHeading.textContent = 'Now'

                // Replaces Text
                var checkAvailability = document.querySelectorAll('#availability');
                checkAvailability.forEach(function (checkAvailability) {
                    checkAvailability.textContent = 'Purchase';
                });
            };
        }, 1000);
    };

    // Displays Countdown
    displayCountdown();

    // Gallery Section
    function displayScreenshots() {
        var getGallery = document.querySelector('.gallery');
        var inGameScreenshots = [
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

        for (var i = 0; i < inGameScreenshots.length; i++) {
            var galleryContainer = document.createElement('div');
            galleryContainer.classList.add('gallery__container');
            galleryContainer.innerHTML = `<img src="${inGameScreenshots[i]}" class="gallery__img">`;
            getGallery.appendChild(galleryContainer);
        };
    };
    displayScreenshots();

    // Modal
    var getModalContainer = document.querySelector('.modal');
    var getModalMedia = document.querySelector('.modal__media');
    var getModalToggle = document.querySelector('.modal__toggle--icon');
    var getImage = document.querySelectorAll('.gallery__img');

    // Function Displays Modal
    function displayModal(type) {
        getModalContainer.style.display = 'block';
        getModalMedia.insertAdjacentHTML('afterbegin', type);
    };

    // Function Removes Modal
    function removeModal() {
        getModalContainer.style.display = "none";
        getModalMedia.innerHTML = "";
    }

    // Toggle Removes Modal
    getModalToggle.addEventListener('click', removeModal);

    // Gallery Image on Click
    getImage.forEach(function (getImage) {
        getImage.addEventListener('click', function(event) {

            var displayImage = `<img src="${event.target.src}" class="modal__img">`;
            displayModal(displayImage);
        });
    });

    // Removes Modal when a random spot outside of media is clicked
    window.onclick = function(event) {
        if (event.target == getModalContainer) {
            removeModal();
        };
    };

    // Navigation Object & Variables
    var toggleItem = document.querySelectorAll('.navigation__item');
    var navigation = {
        icon: document.querySelector('.navigation__toggle--icon'),
        background: document.querySelector('.navigation__background'),
        list: document.querySelector('.navigation__list')
    };

    // Toggles Navigation Icon
    function toggleNavigationIcon() {
        navigation.icon.setAttribute("class", "fas fa-times navigation__toggle--icon");
        navigation.icon.removeAttribute("fas fa-bars navigation__toggle--icon");
    }

    // Removes Navigation
    function removeNavigation() {
        navigation.icon.setAttribute("class", "fas fa-bars navigation__toggle--icon");
        navigation.icon.removeAttribute('fas fa-times navigation__toggle--icon');
        navigation.background.style.opacity = '0';
        navigation.background.style.zIndex = '-1000';
        navigation.list.style.left = '-10rem';
    }

    // Toggle Navigation Background
    navigation.icon.addEventListener('click', function() {
        if (navigation.icon.classList.contains('fa-bars')) {
            navigation.background.style.opacity = '1';
            navigation.background.style.zIndex = '4000';
            navigation.list.style.left = '50%';
            toggleNavigationIcon();

        } else {
            removeNavigation();
        }
    })

    // When Navigation Item is Clicked
    toggleItem.forEach(function (toggleItem) {
        toggleItem.addEventListener('click', function() {

            if (navigation.icon.classList.contains('fa-bars')) {
                toggleNavigationIcon();
    
            } else {
                removeNavigation();
            }
        })
    });

// Trailer
var getCurrentTrailer = document.querySelector('.trailer__current')
var getMateriaImage = document.querySelectorAll('.trailer__materia--img');

// Current Slide
var trailerIndex = 1;

// Displays Slides
displayTrailer(trailerIndex);

// Goes To Previous Trailer
function minusTrailers() {
    displayTrailer(trailerIndex -= 1);
}

var prevTrailer = document.querySelector('.trailer__prev');
prevTrailer.addEventListener('click', minusTrailers);

// Goes To Next Trailer
function plusTrailers() {
    displayTrailer(trailerIndex += 1);
}
var nextTrailer = document.querySelector('.trailer__next');
nextTrailer.addEventListener('click', plusTrailers);

// Gets Slides
function displayTrailer(cur) {
    var materia;
    var i;
    materia = document.getElementsByClassName("trailer__materia");

    if (cur > materia.length) {
        trailerIndex = 1;
    };

    if (cur < 1) {
        trailerIndex = materia.length;
    };

    for (i = 0; i < materia.length; i++) {
        materia[i].className = materia[i].className.replace(" active-materia", "");
    };

    getCurrentTrailer.src = getMateriaImage[trailerIndex - 1].dataset.src;
    materia[trailerIndex - 1].className += " active-materia";   
}

// Keeps Track of Current Trailer for Materia Images
function currentTrailer(n) {
    displayTrailer(trailerIndex = n);
}

// Materia Image on Click Changes Current Trailer
getMateriaImage.forEach(function (getMateriaImage) {
    getMateriaImage.addEventListener('click', function() {

        var getMateriaID = Number(getMateriaImage.id);
        currentTrailer(getMateriaID)
        getCurrentTrailer.src = getMateriaImage.dataset.src
    });
});

// Game Editions Tabs
function gameEditionsTabs(event) {
    let activeTabs = document.querySelectorAll('.active');
    console.log(activeTabs)
  
    // deactivate existing active tab and panel 
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace('active', '');
    });
  
    // activate new tab and panel
    event.target.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
  };

  var editionButtons = document.querySelectorAll('.btn--editions');

  editionButtons.forEach(function (editionButtons) {
    editionButtons.addEventListener('click', gameEditionsTabs, false);
  });

    // Scroll animation
    $("a.scroll").click(function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
});