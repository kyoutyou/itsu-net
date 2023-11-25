const picArray = [
{src: "img/img1.jpg", title: '実績1'},
{src: "img/img2.jpg", title: '実績2'},
{src: "img/img3.jpg", title: '実績3'},
{src: "img/img4.jpg", title: '実績4'}
];

let counter = 0;

function changePicture() {
  if (counter < picArray.length) {
    document.getElementById('pics').src = picArray[counter].src;
    document.getElementById('pic-title').innerHTML = picArray[counter].title;
    counter++;
  } else {
    document.getElementById('pics').src = picArray[0].src;
    document.getElementById('pic-title').innerHTML = picArray[0].title;
    counter = 1;
  }
}

let playingID = 0;

function playSlidedeshow () {
  if (playingID == 0) {
    document.getElementById('playButton').innerHTML = 'STOP';
    playingID = setInterval(changePicture, 3000);
  } else {
    document.getElementById('playButton').innerHTML = 'START';
    clearInterval(playingID);
    playingID = 0;
  }
}