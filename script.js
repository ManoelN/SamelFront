let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#carousel slide img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("img")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("img")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


function sendRequest(file, key) {
    var market = document.getElementById('mkt').value;
    var safeSearch = document.getElementById('safesearch').value;
    var baseUri = 'https://api-teste.samel.com.br/fotos`;

    var form = new FormData();
    form.append("img", file);

    var request = new XMLHttpRequest();

    request.open("POST", baseUri);
    request.addEventListener('load', handleResponse);
    request.send(form);
}