document.addEventListener("DOMContentLoaded", () => {
    const mediaSection = document.getElementById("media-section");
    
    // Example: Add a new media item dynamically
    const newMediaItem = document.createElement("div");
    newMediaItem.classList.add("media-item");
    newMediaItem.innerHTML = `<img src="image3.jpg" alt="Sample Image 3">`;
    mediaSection.appendChild(newMediaItem);
});
