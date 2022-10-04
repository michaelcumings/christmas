data = [{
  type: 'scatterpolar',
  r: [4, 3, 5, 4, 3],
  theta: ['N','C','S','U','M'],
  fill: 'toself'
}]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 5]
    }
  },
  showlegend: false
}

Plotly.newPlot("myDiv", data, layout)
