const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    popup.style.display = "flex";
    form.reset();

    setTimeout(function () {
      popup.style.display = "none";
    }, 3000);
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
}
