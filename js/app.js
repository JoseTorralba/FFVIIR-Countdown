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

        // maybe make a css animation play since this goes by every sec or whatever

        // When countdown reaches release date
        if (distance < 0 ) {
            clearInterval(getCountdownContainer);

            var checkAvailability = document.getElementById('availability')
            checkAvailability.textContent = 'Purchase'
        }
    }, 1000)
}

// Displays Countdown
displayCountdown();

// Gallery Section
function displayScreenshots() {

    var getGallery = document.querySelector('.gallery');
    var inGameScreenshots = [
        "media/screenshot-1.jpg",
        "media/screenshot-2.jpg",
        "media/screenshot-3.jpg",
        "media/screenshot-4.jpg",
        "media/screenshot-5.png",
        "media/screenshot-6.jpg",
        "media/screenshot-7.png",
        "media/screenshot-8.png",
        "media/screenshot-9.png",
        "media/screenshot-10.jpg",
        "media/screenshot-11.jpg",
        "media/screenshot-12.jpg",
        "media/screenshot-13.jpg",
        "media/screenshot-14.jpg",
        "media/screenshot-15.jpg",
        "media/screenshot-16.jpg",
        "media/screenshot-17.jpg",
        "media/screenshot-18.jpg",
        "media/screenshot-19.jpg",
        "media/screenshot-20.jpg",
        "media/screenshot-21.jpg"
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
// Gets Current href and Inserts onto Image Modal Box
getImage.forEach(function (getImage) {
    getImage.addEventListener('click', function(event) {

        getModalBox.style.display = 'block';
        getModalImg.src = event.target.src;
    })
})


    

        
// Scroll animation
$("a.scroll").click(function (event) {
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
});