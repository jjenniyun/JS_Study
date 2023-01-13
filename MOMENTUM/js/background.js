const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); // html 요소 만들기

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // pretend도 있음 가장 앞에 , append가장 뒤에!