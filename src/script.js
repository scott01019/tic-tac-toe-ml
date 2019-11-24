import * as fs from 'fs';

const data = JSON.parse(fs.readFile('data.json', 'utf-8'));

async function run() {
  const values = data.map(d => ({
    x: d.board,
    y: d.valid,
  }));

  tfvis.render.scatterplot(
    {name: 'board v valid'},
    {values}, 
    {
      xLabel: 'board',
      yLabel: 'valid',
      height: 3
    }
  );

  // More code will be added below
}

document.addEventListener('DOMContentLoaded', run); 
