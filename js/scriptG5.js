document.addEventListener('DOMContentLoaded', function () {
  const data = [
      { category: 'France', value: 585 },
      { category: 'Chine', value: 420 },
      { category: 'États-Unis', value: 200 },
      { category: 'Allemagne', value: 60 }
  ];

  // Couleurs pour chaque catégorie
  const colors = ['#0000FF', '#ad2f21', '#001225', '#F2CE16'];

  // Dimensions du graphique
  const width = 500;
  const height = 600;

  // Échelle pour les axes
  const xScale = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([0, width])
      .paddingInner(0.2);

  const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

  // Création du graphique
  const svg = d3.select('#bar')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(40,20)'); // Ajustement du décalage

  // Création des barres avec des couleurs différentes
  svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.category))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.value))
      .attr('fill', (d, i) => colors[i]);

  // Ajout du texte à l'intérieur de chaque barre
  svg.selectAll('text.value')
      .data(data)
      .enter()
      .append('text')
      .classed('value', true)
      .text(d => d.value)
      .attr('x', d => xScale(d.category) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.value) + 20) // Ajustement de la position y
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-family', 'Arial');

  // Ajout du texte pour chaque catégorie au dessus de la barre
  svg.selectAll('text.category')
      .data(data)
      .enter()
      .append('text')
      .classed('category', true)
      .text(d => d.category)
      .attr('x', d => xScale(d.category) + xScale.bandwidth() / 2)
      .attr('y', -10) // Ajustement de la position y
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-family', 'Arial');

  // Ajout de l'axe des x
  svg.append('g')
      .call(d3.axisBottom(xScale))
      .attr('transform', `translate(0,${height})`);

  // Ajout de l'axe des y avec l'unité en millions
  svg.append('g')
      .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format('.2s')))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -40) // Ajustement de la position y
      .attr('x', -height / 2)
      .attr('dy', '0.71em')
      .attr('fill', '#000')
      .text('Valeur (en millions de dollars)');
});