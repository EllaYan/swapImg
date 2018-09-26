var imgUrls = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img5.jpg'
];
var timer = null;
var imgs = document.getElementsByClassName('imgs')[0];
var container = document.getElementsByClassName('container')[0];
var preButton = document.getElementById('pre');
var nextButton = document.getElementById('next');
preButton.onclick = function() {
  prePlay();
};
nextButton.onclick = function() {
  nextPlay();
};
container.onmouseenter = function() {
  clearInterval(timer);
};
container.onmouseleave = function() {
  autoPlay();
};
var imgIndex = 0;

imgs.style.width = (imgUrls.length + 2) * 600 + 'px';

function nextPlay() {
  imgIndex++;
  if (imgIndex > imgUrls.length - 1) {
    imgIndex = 0;
  }
  imgs.style.left = imgIndex * -600 + 'px';
}
function prePlay() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgUrls.length - 1;
  }
  imgs.style.left = imgIndex * -600 + 'px';
}
function autoPlay() {
  timer = setInterval(function() {
    nextPlay();
  }, 1000);
}

function creatImgs() {
  for (var i = 0; i < imgUrls.length; i++) {
    let imgBox = document.createElement('img');
    imgBox.src = imgUrls[i];
    imgs.appendChild(imgBox);
    if (i === imgUrls.length - 1) {
      let imgBox2 = document.createElement('img');
      imgBox2.src = imgUrls[i];
      imgs.appendChild(imgBox2);
    }
  }
}
creatImgs();
autoPlay();
