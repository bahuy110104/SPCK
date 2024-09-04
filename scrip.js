
// Function to handle navigation
function navigateTo(sectionId) {
    // Update the browser's URL without reloading the page
    history.pushState(null, null, sectionId);

    // Load the content for the requested section
    loadSection(sectionId);
}

// Function to load the appropriate section based on the URL
function loadSection(sectionId) {
    // Hide all sections
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // Show the target section
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.style.display = "block";
    } else {
        // If the section doesn't exist, show a default section (home)
        document.querySelector("#home").style.display = "block";
    }
}

// Handle browser back/forward button using popstate event
window.addEventListener("popstate", function () {
    // Get the current section from the URL and load it
    loadSection(location.hash || "#home");
});

// Attach click event listeners to navbar links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".Navbar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent the default link behavior
            
            // Get the target section from the href attribute and navigate
            const sectionId = this.getAttribute("href");
            navigateTo(sectionId);
        });
    });

    // On page load, load the section based on the URL hash or default to home
    loadSection(location.hash || "#home");
});
