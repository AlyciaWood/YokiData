document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
  
    // Fonction pour lancer la vidéo et la mettre en pause à la fin
    function playPauseVideo() {
      video.play();
    }
  
    // Fonction pour mettre en pause la vidéo à la fin
    function pauseVideo() {
      video.pause();
      video.currentTime = 0; // Remet la vidéo au début
    }
  
    // Ajoutez un écouteur d'événement pour le survol de la souris
    video.addEventListener('mouseover', playPauseVideo);
  
    // Ajoutez un écouteur d'événement pour détecter la fin de la vidéo
    video.addEventListener('ended', pauseVideo);
  
    // Autoplay la vidéo une fois que la page est chargée
    video.autoplay = true;
    video.load(); // Nécessaire pour certains navigateurs afin de garantir l'autoplay
  });
  