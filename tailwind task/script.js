document.addEventListener("DOMContentLoaded", function() {
    // Get icons
    const currentIcon = document.getElementById('current tab');
    const notificationsIcon = document.getElementById('notifications');
    const favoritesIcon = document.getElementById('favorites');
    const quickSettingsIcon = document.getElementById('quick setting');
    const profileIcon = document.getElementById('profile');

    // Add event listeners to icons
    currentIcon.addEventListener('click', function() {
        alert("Current Tab clicked!");
    });

    notificationsIcon.addEventListener('click', function() {
        alert("Notifications clicked!");
    });

    favoritesIcon.addEventListener('click', function() {
        alert("Favorites clicked!");
    });

    quickSettingsIcon.addEventListener('click', function() {
        alert("Quick Settings clicked!");
    });

    profileIcon.addEventListener('click', function() {
        alert("Profile clicked!");
    });
});
