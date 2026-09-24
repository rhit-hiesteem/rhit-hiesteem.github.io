//Found script loading here
//https://www.delftstack.com/howto/javascript/load-html-file-javascript/
function loadHTML(htmlPage, id) {
    fetch(htmlPage)
      .then(response => response.text())
      .then(text => document.getElementById(id).innerHTML = text);
}

function resumeLoaded () {
    let sectionButtons = document.querySelectorAll(".resume-header-button");

    let sectionLists = document.querySelectorAll(".resume-header-button+ul");

    for (let i = 0; i < sectionButtons.length; i++) {
        sectionButtons[i].addEventListener("click", function() {
            let sectionList = sectionButtons[i].nextElementSibling;
            let clickHereSpan = sectionButtons[i].lastElementChild;

            // the click here span only appears until its clicked the first time
            clickHereSpan.classList.add("hidden"); 

            sectionList.classList.toggle("hidden");
            sectionList.classList.toggle("show");
        });
    }
}

console.log("main.js loaded");
loadHTML("/placeholder-html/nav.html", "nav-container");
loadHTML("/placeholder-html/footer.html", "footer-container");

console.log(window.location.pathname);

if (window.location.pathname == "/resume.html") {
    resumeLoaded();
}