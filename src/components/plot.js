// code inspired by
// https://github.com/aulneau/next.js-with-react-plotly.js/
// and modified
import React from 'react';
import plotly from 'plotly.js/dist/plotly';
import createPlotComponent from 'react-plotly.js/factory';

const Plot = createPlotComponent(plotly);

let userWeight = [1,];
let userhight = [2,];

export default ({userWeight, userhight}) => {
    const heights = Array(61).fill().map((_,i) => ((i)+140));
    const weights = Array(61).fill().map((_,i) => ((i)+40));

    const bmiValues = [];

  for (let y in heights) {
    let temp = []
    for (let x in weights) {
        temp.push(weights[x] / ((heights[y]/100)**2));
    }
    bmiValues.push(temp);
  }

  console.log(heights, weights, bmiValues, bmiValues[50,0]);

  return (
  <Plot
    data={[
      {
        type: 'scatter',
        mode: 'points',
        x: [80],
        y: [160],
        marker: {color: 'red'}
      },
      {
        type: 'heatmap',
        z: bmiValues,
        x: weights,
        y: heights,
        hoverongaps: false,
        colorscale: [
          ['0.0', 'rgb(0,0,149)'],
          ['0.15', 'rgb(0,0,180)'],
          ['0.16', 'rgb(0,255,0)'],
          ['0.34', 'rgb(0,255,0)'],
          ['0.35', 'rgb(255,200,0)'],
          ['0.45', 'rgb(255,200,0)'],
          ['0.46', 'rgb(255,0,0)'],
          ['0.6', 'rgb(255,0,0)'],
          ['0.61', 'rgb(255,0,255)'],
          ['1.0', 'rgb(255,0,255)']
        ],
        showscale: true,
      }
    ]}

    layout={{
      xaxis: {
        title: 'Height [cm]',
      },
      yaxis: {
        title: 'Weight [kg]',
      },
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(150,150,150)'
      },
      width: 960,
      height: 720,
      title: 'Body-Mass-Index Chart',
      colorscale: {['one','two']},

    }}
  />
)
}