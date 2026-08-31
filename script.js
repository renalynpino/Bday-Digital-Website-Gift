/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage(pageId) {

    // Get all pages
    const pages = document.querySelectorAll(".page");

    // Hide every page
    pages.forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   GIFT MODAL
========================================= */

function openGift(giftType) {

    const modal = document.getElementById("gift-modal");

    const letter = document.getElementById("letter-content");
    const pictures = document.getElementById("pictures-content");
    const cake = document.getElementById("cake-content");

    // Hide all gift contents
    letter.classList.remove("active");
    pictures.classList.remove("active");
    cake.classList.remove("active");


    // Show selected gift
    if (giftType === "letter") {

        letter.classList.add("active");

    }

    else if (giftType === "pictures") {

        pictures.classList.add("active");

    }

    else if (giftType === "cake") {

        cake.classList.add("active");

    }


    // Show modal
    modal.classList.add("show");

}


function closeGift() {

    const modal = document.getElementById("gift-modal");

    modal.classList.remove("show");

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

const giftModal = document.getElementById("gift-modal");

giftModal.addEventListener("click", function(event) {

    if (event.target === giftModal) {
        closeGift();
    }

});


/* =========================================
   DATE QUESTION
========================================= */

function dateAnswer(answer) {

    const result = document.getElementById("date-result");

    const gif = document.getElementById("date-gif");

    const message = document.getElementById("date-message");

    const continueButton = document.getElementById("date-continue");


    // Show result area
    result.classList.add("show");

    continueButton.classList.remove("hidden");


    if (answer === "yes") {

        gif.src = "gifs/happy-cat.gif";

        gif.onerror = function() {
            this.src =
                "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
        };

        message.innerHTML =
            "YAYYYYY! I KNEW YOU WERE READY! 😭💗";

    }

    else {

        gif.src = "gifs/sad-cat.gif";

        gif.onerror = function() {
            this.src =
                "https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif";
        };

        message.innerHTML =
            "HUHUHU 😭 Okay... I'll wait for you 🥺";

    }

}


/* =========================================
   TANGIBLE GIFT QUESTION
========================================= */

function tangibleAnswer(answer) {

    const result = document.getElementById("tangible-result");

    const icon = document.getElementById("tangible-icon");

    const message = document.getElementById("tangible-message");

    const continueButton =
        document.getElementById("tangible-continue");


    // Show result
    result.classList.add("show");


    if (answer === "yes") {

        icon.innerHTML = "🎁";

        message.innerHTML =
            "ASK FOR YNA! 👀🎁";

        continueButton.innerHTML =
            "OKAY! →";

        continueButton.classList.remove("hidden");

    }

    else {

        icon.innerHTML = "🥺";

        message.innerHTML =
            "MAYBE LATER? 🥺";

        continueButton.innerHTML =
            "OKAY... I'LL TAKE IT NOW! 💗";

        continueButton.classList.remove("hidden");

    }

}


/* =========================================
   STARTUP
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "Happy Birthday website loaded! 💗"
    );

});