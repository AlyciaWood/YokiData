document.addEventListener('DOMContentLoaded', function () {
    const data3 = {
        labels: ['BD de genre', 'Manga', 'Comics', 'BD jeunesse', 'Autre'],
        datasets: [{
            data: [33, 41, 5, 20, 1],
            backgroundColor: ['#C1DB88', '#C487DB', '#96879C', '#543E5C', '#808672'],
        }]
    };

    // Configuration du graphique
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 14,
                },
                formatter: (value, ctx) => {
                    const dataset = ctx.chart.data.datasets[ctx.datasetIndex];
                    const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
                    const currentValue = dataset.data[ctx.dataIndex];
                    const percentage = Math.round((currentValue / total) * 100);
                    return percentage + '%';
                }
            },
            legend: {
                position: 'right',
                align: 'center',
                labels: {
                    boxWidth: 20,
                    padding: 20,
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart',
        }
    };

    // Obtenez le contexte du canevas
    const ctx = document.getElementById('myChart2').getContext('2d');

    // Créez le graphique circulaire avec l'animation
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data3,
        options: options,
    });

    // Utilisez Waypoints.js pour détecter le moment où la section devient visible
    const triggerElement = document.getElementById('trigger');
    new Waypoint({
        element: triggerElement,
        handler: function (direction) {
            if (direction === 'down') {
                // Déclenchez l'animation lorsque la section devient visible
                myChart.update();
                this.destroy(); // Détruire le gestionnaire une fois utilisé
            }
        },
        offset: '75%', // Lorsque le haut de l'élément atteint le milieu de la fenêtre
    });
});
