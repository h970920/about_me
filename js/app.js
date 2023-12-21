document.addEventListener("DOMContentLoaded", function () {
  const photoPaths = [
    "./img/p1.jpg",
    "./img/p2.jpg",
    "./img/p14.jpg",
    "./img/p7.jpg",
    "./img/p6.jpg",
    "./img/p10.jpg",
    "./img/p11.jpg",
    "./img/p9.jpg",
    "./img/p12.jpg",
    "./img/p13.jpg",
    "./img/p8.jpg",
    "./img/a1.jpg",
    "./img/a2.jpg",
    "./img/a3.jpg",
    "./img/a4.jpg",
    "./img/a5.jpg",
    "./img/a6.jpg",
    "./img/a7.jpg",
    "./img/a8.jpg",
    "./img/a9.jpg",
    "./img/a10.jpg",
    "./img/a11.jpg",
    "./img/a12.jpg",
    "./img/a13.jpg",
    "./img/a14.jpg",
    "./img/a15.jpg",
    "./img/a16.jpg",
  ];

  const gallery = document.getElementById("photoGallery");

  setRandomImages();

  function setRandomImages() {
    gallery.innerHTML = "";

    const shuffledImages = shuffleArray(photoPaths.slice());

    for (let i = 0; i < 10; i++) {
      const newFigure = document.createElement("figure");
      const newImage = document.createElement("img");
      newImage.src = shuffledImages[i];
      newImage.alt = "#";
      newFigure.appendChild(newImage);

      gallery.appendChild(newFigure);
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  window.addEventListener("beforeunload", setRandomImages);
});
