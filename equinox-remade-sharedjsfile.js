const favicon = document.getElementById("favicon");

// Load saved option on page load
window.onload = function() {
    const savedSite = localStorage.getItem('selectedSite');
    if (savedSite) {
        const siteData = JSON.parse(savedSite);
        updateFaviconAndTitle(siteData.title, siteData.favicon);
    }
};

// Function to handle button clicks
function handleButtonClick(title, faviconURL) {
    const siteData = { title, favicon: faviconURL };
    localStorage.setItem('selectedSite', JSON.stringify(siteData));
    updateFaviconAndTitle(title, faviconURL);
}

// Event listeners for buttons
document.getElementById('googleButton').addEventListener('click', function() {
    handleButtonClick(this.dataset.title, this.dataset.favicon);
});

document.getElementById('outlookButton').addEventListener('click', function() {
    handleButtonClick(this.dataset.title, this.dataset.favicon);
});

// Reset to default settings
document.getElementById('resetButton').addEventListener('click', function() {
    localStorage.removeItem('selectedSite');
    updateFaviconAndTitle('Settings', 'logo.png'); // Default settings
});

// Function to update the favicon and title
function updateFaviconAndTitle(title, faviconURL) {
    document.title = title;

    // Update the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconURL;
    
    // Remove existing favicon link if any
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
        existingFavicon.parentNode.removeChild(existingFavicon);
    }

    // Append new favicon link
    document.head.appendChild(link);
}
