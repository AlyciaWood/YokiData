document.addEventListener('DOMContentLoaded', function () {
    const data2 = {
        labels: ['Litérature Générale', 'BD / Manga', 'Jeunesse', 'Pratique', 'Science humaine - Technologie','Autre'],
        datasets: [{
            data: [27,23,16,11,8,15], // Valeurs
            backgroundColor: ['#00D8DB', '#DB7900', '#DB2D00', '#2E5B5C', '#5C472E', 'grey' ], // Couleurs
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
            duration: 4000,
        }
    };

    // Obtenez le contexte du canevas
    const ctx = document.getElementById('myChart').getContext('2d');

    // Créez le graphique circulaire avec l'animation déclenchée lorsque la section devient visible
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data2,
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
