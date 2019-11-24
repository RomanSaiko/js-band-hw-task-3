import '../styles/index.scss';
import Costs from './modules/Costs.js';
import Vehicles from './modules/Vehicles.js';

function Init() {
    const costs = new Costs();
    const vehicles = new Vehicles();
}

document.addEventListener("DOMContentLoaded", Init);
