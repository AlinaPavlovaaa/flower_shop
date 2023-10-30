
var jsonData = {
    images: [
        "https://cdn.shopify.com/s/files/1/0065/4999/5573/articles/orange_dahlia_blog_hero_1024x1024.png?v=1663744334",
        "https://www.gardenia.net/storage/app/public/guides/detail//ZtdYO68q1ig1YKAbRldDgT4T55eXICYgl9gMaS7q.webp",
        "https://www.tracysflowers.co.uk/upload/mt/tf52/upload/files/images/panels/35-test-3.jpg"
    ]
};


var currentIndex = 0;


function showCurrentImage() {
    var slideshowContainer = document.querySelector(".slideshow-container");
    var imageUrl = jsonData.images[currentIndex];


    var image = document.createElement("img");
    image.src = imageUrl;


    slideshowContainer.innerHTML = "";
    slideshowContainer.appendChild(image);
}


function showNextImage() {
    currentIndex = (currentIndex + 1) % jsonData.images.length;
    showCurrentImage();
}


function showPreviousImage() {
    currentIndex = (currentIndex - 1 + jsonData.images.length) % jsonData.images.length;
    showCurrentImage();
}


showCurrentImage();


setInterval(showNextImage, 3000);










