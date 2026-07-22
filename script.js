document.addEventListener("DOMContentLoaded", function () {

    const introScreen =
        document.getElementById("introScreen");

    const birthdayScreen =
        document.getElementById("birthdayScreen");

    const surpriseSection =
        document.getElementById("surpriseSection");

    const startBtn =
        document.getElementById("startBtn");

    const surpriseBtn =
        document.getElementById("surpriseBtn");

    const typewriterText =
        document.getElementById("typewriterText");

    const song =
        document.getElementById("birthdaySong");

    const slideImage =
        document.getElementById("slideImage");


    /* =========================
       TYPEWRITER MESSAGE
    ========================= */

    const message =
        "A beautiful day for a beautiful soul... 💛";

    let index = 0;


    function typeWriter() {

        if (index < message.length) {

            typewriterText.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(typeWriter, 80);

        }

    }


    /* =========================
       START SURPRISE
    ========================= */

    startBtn.addEventListener(
        "click",
        function () {

            introScreen.style.display = "none";

            birthdayScreen.style.display = "flex";

            typeWriter();

            song.play().catch(function () {

                console.log(
                    "Music will play after user interaction."
                );

            });

        }
    );


    /* =========================
       OPEN YOUR SURPRISE
    ========================= */

    surpriseBtn.addEventListener(
        "click",
        function () {

            birthdayScreen.style.display = "none";

            surpriseSection.style.display = "block";

            createHearts();

            createButterflies();

            startSlideshow();

        }
    );


    /* =========================
       PHOTO SLIDESHOW
    ========================= */

    const photos = [

        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg",
        "photos4.jpg",
        "photo5.jpg",
        "photo6.jpg",
        "photo7.jpg",
        "photo8.jpg",
        "photo9.jpg",
        "photo10.jpg"

    ];


    let photoIndex = 0;


    function startSlideshow() {

        setInterval(function () {

            photoIndex++;

            if (photoIndex >= photos.length) {

                photoIndex = 0;

            }

            slideImage.style.opacity = 0;


            setTimeout(function () {

                slideImage.src =
                    photos[photoIndex];

                slideImage.style.opacity = 1;

            }, 500);


        }, 3000);

    }


    /* =========================
       YELLOW FLOATING HEARTS
    ========================= */

    function createHearts() {

        setInterval(function () {

            const heart =
                document.createElement("div");

            heart.className =
                "floating-heart";

            heart.innerHTML = "💛";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.animationDuration =
                (4 + Math.random() * 4) + "s";

            document.body.appendChild(heart);


            setTimeout(function () {

                heart.remove();

            }, 8000);


        }, 500);

    }


    /* =========================
       FLYING BUTTERFLIES
    ========================= */

    function createButterflies() {

        setInterval(function () {

            const butterfly =
                document.createElement("div");

            butterfly.className =
                "butterfly";

            butterfly.innerHTML = "🦋";

            butterfly.style.left =
                Math.random() * 100 + "vw";

            butterfly.style.animationDuration =
                (5 + Math.random() * 5) + "s";

            document.body.appendChild(butterfly);


            setTimeout(function () {

                butterfly.remove();

            }, 10000);


        }, 1200);

    }

});
