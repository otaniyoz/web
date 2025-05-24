'use strict';
window.onload = () => {
  const sound1 = document.getElementById('paper-1');
  const sound2 = document.getElementById('paper-2');
  const sound3 = document.getElementById('bubble-wrap');
  document.getElementById('sound-container-1').addEventListener("mouseenter", () => {
    sound1.play();
  });
  document.getElementById('sound-container-1').addEventListener("mouseleave", function(){
    sound1.pause();
    sound1.currentTime = 0;
  });

  document.getElementById('sound-container-2').addEventListener("mouseenter", () => {
    sound2.play();
  });
  document.getElementById('sound-container-2').addEventListener("mouseleave", function(){
    sound2.pause();
    sound2.currentTime = 0;
  });

  document.getElementById('sound-container-3').addEventListener("mouseenter", () => {
    sound3.play();
  });
  document.getElementById('sound-container-3').addEventListener("mouseleave", function(){
    sound3.pause();
    sound3.currentTime = 0;
  });
};