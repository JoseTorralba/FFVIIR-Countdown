// Document on Ready
document.addEventListener('DOMContentLoaded', function() {
    function displayCountdown() {
        // Release Date
        const releaseDate = new Date('Apr 10, 2020 00:00:00').getTime();

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
    var getVideo = document.querySelectorAll('.trailer__img');
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

    // Video Thumbnail on Click
    getVideo.forEach(function (getVideo) {
        getVideo.addEventListener('click', function(event) {

            var displayVideo = `<iframe src="${event.target.dataset.src}" class="modal__vid" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            displayModal(displayVideo);
        });
    });

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

    // Scroll animation
    $("a.scroll").click(function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
});



// Current Slide
var slideIndex = 1;

// Displays Slides
showSlides(slideIndex);


// Gets Slides
function showSlides(cur) {
    var dots;
    var i;
    var slides = document.getElementsByClassName("purchase-box__edition");
    dots = document.getElementsByClassName("btn--editions");

    if (cur > slides.length) {
        slideIndex = 1;
    };

    if (cur < 1) {
        slideIndex = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

    };
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


// Keeps Track of Current Slide for Dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Dots On Click
var firstDot = document.getElementById('1');
firstDot.addEventListener('click', function() {
    currentSlide(1)
})

var secondDot = document.getElementById('2');
secondDot.addEventListener('click', function() {
    currentSlide(2)
})

var thirdDot = document.getElementById('3');
thirdDot.addEventListener('click', function() {
    currentSlide(3)
})

