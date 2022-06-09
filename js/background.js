const image = ["0.jpeg","1.jpeg","2.jpeg"];

const choosenImage = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${choosenImage}`

document.body.appendChild(bgImage);