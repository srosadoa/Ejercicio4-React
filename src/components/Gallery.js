import React from 'react';
import './Gallery.scss';

async function getresults(heightRef) {
    const resp = await fetch('api?input=${heightRef}');
    const data = await resp.json();
    console.log('data from back', data);
    //printValues(data);
  }
  var id,nombre,nombre,status, imagen;
fetch(
    "https://rickandmortyapi.com/api/character"
  ).then((response) => response.json()).then((data) => {
    id = data[0].results;
    nombre= data[1].results;   
    status = data[2].results; 
    gender = data[5].results; 
    imagen = data[0].image;
  });