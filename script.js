const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop refresh

    // Show popup
    popup.style.display = "flex";

    // Clear form
    form.reset();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
}

setTimeout(() => {
  popup.style.display = "none";
}, 3000);