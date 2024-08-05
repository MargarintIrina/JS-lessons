"use strict"; 
function renderMap(){
        for(let i = 1; i <= 100; i++ ){
                gameMap.innerHTML += `<div class="map-cell"></div>`;
        }
}
renderMap();
