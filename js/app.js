// Document on Ready
document.addEventListener('DOMContentLoaded', function() {

    function displayCountdown() {
        // Release Date
        const releaseDate = new Date('Mar 3, 2020 00:00:00').getTime();

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
                var checkAvailability = document.querySelectorAll('#availability')
                checkAvailability.forEach(function (checkAvailability) {
                    checkAvailability.textContent = 'Purchase';
                });
            }
        }, 1000)
    }

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
            "media/screenshots/5.png",
            "media/screenshots/6.jpg",
            "media/screenshots/7.png",
            "media/screenshots/8.png",
            "media/screenshots/9.png",
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
            "media/screenshots/21.jpg"
        ];

        for (var i = 0; i < inGameScreenshots.length; i++) {

            var imgBox = document.createElement('div');
            imgBox.classList.add('gallery__container')

            var imgImage = document.createElement('img');
            imgImage.classList.add('gallery__img')
            imgImage.classList.add('image-get')
            imgImage.src = inGameScreenshots[i]

            imgBox.appendChild(imgImage)
            getGallery.appendChild(imgBox)
        }
    }
    displayScreenshots();


    // VIDEO / IMAGE MODAL

    // MODAL TOGGLE 
    const getModalToggle = document.querySelectorAll('.modal-container__toggle--icon');

    // Removes Image & Video Modal Box is Clicked
    getModalToggle.forEach(function (getModalToggle) {
        getModalToggle.addEventListener('click', function() {

            getModalBox.style.display = 'none';
            getModalBoxVid.style.display = "none";
            getModalVid.src = "";
        })
    })

    // Removes Image & Video Modal Box whenever a random spot is clicked
    window.onclick = function(event) {
        if (event.target == getModalBox || event.target == getModalBoxVid) {

            getModalBox.style.display = "none";
            getModalBoxVid.style.display = "none";
            getModalVid.src = "";
        }
    }


    // Video Modal Variables
    const getVideo = document.querySelectorAll('.video-get');
    var getModalBoxVid = document.getElementById('video-modal-container');
    var getModalVid = document.getElementById('modal-vid');

    // Event Listener when Image is Clicked
    getVideo.forEach(function (getVideo) {
        getVideo.addEventListener('click', function(event) {

            getModalBoxVid.style.display = 'block';
            getModalVid.src = event.target.dataset.src;
        })
    })


    // Image Modal Variables
    var getModalBox = document.getElementById('modal-container');
    var getModalImg = document.getElementById('modal-img');
    const getImage = document.querySelectorAll('.image-get');

    // Event Listener when Image is Clicked
    getImage.forEach(function (getImage) {
        getImage.addEventListener('click', function(event) {

            // Gets Current href and Inserts onto Image Modal Box
            getModalBox.style.display = 'block';
            getModalImg.src = event.target.src;
        })
    })

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
            navigation.list.style.left = '50%'
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

// Trailer Slides
// Current Slide
var slideIndex = 1;

// Displays Slides
showSlides(slideIndex);

// Goes To Previous Slide
function minusSlides() {
    showSlides(slideIndex -= 1);
}
var prevSlide = document.querySelector('.trailers__prev');
prevSlide.addEventListener('click', minusSlides);

// Goes To Next Slide
function plusSlides() {
    showSlides(slideIndex += 1);
}

var nextSlide = document.querySelector('.trailers__next');
nextSlide.addEventListener('click', plusSlides);

// Gets Slides
function showSlides(cur) {
    var i;
    var slides = document.getElementsByClassName("trailers__current");

    if (cur > slides.length) {
        slideIndex = 1;
    };

    if (cur < 1) {
        slideIndex = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    };

    slides[slideIndex-1].style.display = "block";  
}