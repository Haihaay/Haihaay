document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelector("details");

    details.addEventListener("toggle", function () {
        if (details.open) {
            details.classList.add("open");
        } else {
            details.classList.remove("open");
        }
    });
});
