document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const imageViewer = document.getElementById("imageViewer");
    const fullImage = document.getElementById("fullImage");
    const overlay = document.getElementById("overlay");
    const closeButton = document.querySelector(".close-button");
  
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const imageUrl = thumbnail.getAttribute("src");
        fullImage.setAttribute("src", imageUrl);
        imageViewer.style.display = "block";
        overlay.style.display = "block";
      });
    });
  
    closeButton.addEventListener("click", () => {
      imageViewer.style.display = "none";
      overlay.style.display = "none";
    });
  
    overlay.addEventListener("click", () => {
      imageViewer.style.display = "none";
      overlay.style.display = "none";
    });
  });
  