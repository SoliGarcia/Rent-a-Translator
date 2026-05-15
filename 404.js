// Redirect unknown routes to the error page
(function () {
  const validPages = [
    "index.html", "about.html", "servicepage.html", "connectpage.html",
    "errorpage.html", "404.html",
    "vanessa.html", "daniel.html", "regan.html", "jaime.html",
    "nyra.html", "kenji.html", "omar.html", "abigail.html"
  ];

  const path = window.location.pathname.toLowerCase();
  const filename = path.split("/").pop() || "index.html";

  const isValid = filename === "" || validPages.includes(filename);

  if (!isValid) {
    window.location.href = "/404.html";
  }
})();
