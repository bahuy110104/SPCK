
function navigateTo(sectionId) {
    history.pushState(null, null, sectionId);
    loadSection(sectionId);
}

function loadSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.style.display = "block";
    } else {
        document.querySelector("#home").style.display = "block";
    }
}

window.addEventListener("popstate", function () {
    loadSection(location.hash || "#home");
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".Navbar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            
            const sectionId = this.getAttribute("href");
            navigateTo(sectionId);
        });
    });

    loadSection(location.hash || "#home");
});
