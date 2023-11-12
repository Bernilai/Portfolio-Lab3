const hobbyBtn = document.querySelector("#hobby_btn");
const schoolsBtn = document.querySelector("#schools_btn");
const portfolioBtn = document.querySelector("#portfolio_btn");

hobbyBtn.onclick = function() {
    const div = document.querySelector(".hobby_list");
    if (div.className === "hobby_list") {
        div.className = "hobby_list active";
    }
    else {
        div.className = "hobby_list";
    }
};

schoolsBtn.onclick = function() {
    const div = document.querySelector(".schools_table");
    if (div.className === "schools_table") {
        div.className = "schools_table active";
    }
    else {
        div.className = "schools_table";
    }
};

portfolioBtn.onclick = function() {
    const div = document.querySelector(".portfolio_content");
    if (div.className === "portfolio_content") {
        div.className = "portfolio_content active";
    }
    else {
        div.className = "portfolio_content";
    }
};

function fullScreen() {
    const imgs = document.querySelectorAll(".image");
    const fullPage =document.querySelector("#fullpage")

    imgs.forEach(img => {
        img.addEventListener("click", function () {
            fullPage.style.backgroundImage = 'url(' + img.src + ')';
            fullPage.style.display = 'block';
        });
    });
}