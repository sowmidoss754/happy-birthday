document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("surpriseBtn");
    const wish = document.getElementById("wish");

    button.addEventListener("click", function () {

        wish.innerHTML = `
            🎉 Happy Birthday Jason! 🎂
            <br><br>
            May your special day be filled with happiness,
            love and beautiful memories! ❤️
            <br><br>
            ✨ Keep smiling and Rock Ur dy daw! ✨
        `;

        button.style.display = "none";

        // Hearts ❤️
        for (let i = 0; i < 20; i++) {

            const heart = document.createElement("div");

            heart.innerHTML = "❤️";
            heart.className = "floating-heart";

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.bottom = "-50px";
            heart.style.animationDelay = Math.random() * 5 + "s";

            document.body.appendChild(heart);
        }

        // Butterflies 🦋
        for (let i = 0; i < 10; i++) {

            const butterfly = document.createElement("div");

            butterfly.innerHTML = "🦋";
            butterfly.className = "butterfly";

            butterfly.style.position = "fixed";
            butterfly.style.left = Math.random() * 100 + "%";
            butterfly.style.bottom = "-50px";
            butterfly.style.animationDelay = Math.random() * 5 + "s";

            document.body.appendChild(butterfly);
        }

    });

});
