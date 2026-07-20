document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("surpriseBtn");
    const wish = document.getElementById("wish");

    button.addEventListener("click", function () {

        wish.innerHTML =
        "🎉 Happy Birthday Jason! 🎂<br><br>May your life be filled with happiness, success and endless smiles. ❤️✨";

        button.style.display = "none";

    });

});
