// https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages
$(function(){
  $("#nav-container").load("placeholder-html/nav.html");
  $("#footer-container").load("placeholder-html/footer.html");
});

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded() {
  // https://www.w3schools.com/howto/howto_js_get_url.asp
  let path = window.location.href;
  if (path.endsWith("portfolio.html")) {
    portfolioLoaded();
  }
}

function portfolioLoaded() {
  let portfolioImages = document.querySelectorAll(".portfolio-image");

  for (let image of portfolioImages) {
    image.addEventListener("click", (e) => {
      let description = null;
      if (e.target.nextElementSibling) { //check if the description is before or after the image
        description = e.target.nextElementSibling;
      } else {
        description = e.target.previousElementSibling;
      }
      if(description)
        description.classList.toggle("show");
      else {
        console.log("image query not working");
      }
    });
  }
}