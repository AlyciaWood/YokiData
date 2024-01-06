document.addEventListener('DOMContentLoaded', function () {
    const interactiveImage = document.getElementById('interactive-image2');
    const interactiveList = document.getElementById('interactive-list2');
    // Afficher la liste au clic
    interactiveImage.addEventListener('click', function () {
        // Afficher la liste
        interactiveList.classList.remove('hidden2');
        interactiveList.style.opacity = 1;
        interactiveList.style.pointerEvents = 'auto';

        // Cacher l'image
        interactiveImage.classList.add('hidden2');
    });

    //revenir a la carte au clic
    interactiveList.addEventListener('click', function () {
        // Cacher la liste
        interactiveList.classList.add('hidden2');
        interactiveList.style.opacity = 0;
        interactiveList.style.pointerEvents = 'none';
        setTimeout(() => {
            interactiveImage.classList.remove('hidden2');
            interactiveImage.style.opacity = 1;
            interactiveList.classList.add('hidden2');
        }, 300); // Le délai correspond à la durée de la transition

        // Afficher l'image
        interactiveImage.classList.remove('hidden2');
    });
});
