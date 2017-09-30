var i = 1;
var nextSong = "";
function setup()
  {
  document.getElementById('audio').addEventListener('ended', function()
    {
    i++;
    nextSong = "Songs/" + i + ".mp3";
    audioPlayer = document.getElementById('audio');
    audioPlayer.src = nextSong;
    if (nextSong == "Songs/" + 6 + ".mp3"){loop();}
    else {forward();}
    }, false);
  }

function loop()
  {
  i = 1;
  nextSong = "Songs/" + i + ".mp3";
  audioPlayer.src = nextSong;
  audioPLayer.load();
  audioPlayer.play();
  }

function forward()
  {
  audioPLayer.load();
  audioPlayer.play();
  }
