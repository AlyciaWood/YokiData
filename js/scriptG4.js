const data4 = [
  { category: 'Shonen', value: 41, imageUrl: 'img/Onepiece.jpg', text: "41%" },
  { category: 'Seinen', value: 10, imageUrl: 'img/berserk.jpg', text:'10%' },
  { category: 'Shojo', value: 19, imageUrl: 'img/nana.jpg', text:'19%' },
  { category: 'Autre', value: 29, imageUrl: 'img/slime.jpg', text:'29%'}
];

// Dimensions du graphique
const width = 500;
const height = 500;
const radius = Math.min(width, height) / 2;

// customisation des couleurs
const customColors = ['#E67100', '#00E6CA', '#E6A3AF', '#A3E6C5'];
// Couleurs
const color = d3.scaleOrdinal().range(customColors);
// Création de l'élément SVG
const svg = d3.select('#chart-container').append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', `translate(${width / 2},${height / 2})`);

// Fonction pour créer les arcs
const arc = d3.arc()
  .outerRadius(radius)
  .innerRadius(0);

// Création du pie chart
const pie = d3.pie().value(d => d.value);

// Création des arcs
const arcs = svg.selectAll('.arc')
  .data(pie(data4))
  .enter().append('g')
  .attr('class', 'arc');

// Ajout des tranches (path) avec images
arcs.append('path')
  .attr('d', arc)
  .attr('fill', (d, i) => color(i));

arcs.append('image')
  .attr('xlink:href', d => d.data.imageUrl)
  .attr('width', 70)
  .attr('height', 70)
  .attr('transform', d => `translate(${arc.centroid(d)}) translate(-40,-50)`); // Ajustez les valeurs de translation

// Ajout du nom des catégorie au graphique
arcs.append('text')
  .attr('transform', d => `translate(${arc.centroid(d)}) translate(0, -60)`) // Ajustez les valeurs de translation
  .attr('text-anchor', 'middle')
  .style('font-size', '15px')
  .text(d => d.data.category);

// Ajout du poucentage de chaque catégorie
arcs.append('text')
  .attr('transform', d => `translate(${arc.centroid(d)}) translate(5, 40)`) // Ajustez les valeurs de translation
  .attr('text-anchor', 'middle')
  .style('font-size', '15px')
  .text(d => d.data.text);
