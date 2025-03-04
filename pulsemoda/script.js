// Function to hide the status bar after LivePerson loads
function hideStatusBar() {
    setTimeout(() => {
        const statusBar = document.getElementById("status-bar");
        if (statusBar) {
            statusBar.classList.add("hidden");
        }
    }, 3000); // Hide after 3 seconds
}

// Detect when LivePerson is fully initialized
if (window.lpTag) {
    window.lpTag.events.bind("LPT", "DOM_READY", hideStatusBar);
} else {
    // Fallback in case LivePerson doesn't load properly
    window.addEventListener("load", hideStatusBar);
}