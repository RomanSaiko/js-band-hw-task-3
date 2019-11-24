import Truck from './Truck.js';
import Ship from './Ship.js';

export default class Vehicles {
    constructor() {
        const createTruck = document.getElementById('create-truck');
        const createShip = document.getElementById('create-ship');
        createTruck.addEventListener('submit', this.addTruck.bind(this));
        createShip.addEventListener('submit', this.addShip.bind(this));
        this.transportList = document.getElementById('vehicle-list');
        this.render();
    }

    addTruck(e) {
        e.preventDefault();
        const id = document.getElementById('truck-id').value;
        const model = document.getElementById('truck-model').value;
        const licensePlate = document.getElementById('license-plate').value;
        const producedYear = document.getElementById('truck-produced-year').value;
        const capacity = document.getElementById('truck-capacity').value;
        const averageSpeed = document.getElementById('truck-average-speed').value;
        const typeOfGas = document.getElementById('gas-type').value;

        let truckItem = new Truck(id, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas);

        const truckListItem = document.createElement('li');
        truckListItem.innerHTML = `
        <p>id - ${truckItem._id}</p>
        <p>Model - ${truckItem._model}</p>
        <p>License plate - ${truckItem._licensePlate}</p>
        <p>Produced year - ${truckItem._producedYear}</p>
        <p>Capacity - ${truckItem.showCapacityInPounds}</p>
        <p>Average speed - ${truckItem.showAverageSpeed}</p>
        <p>Type of gas - ${truckItem._typeOfGas}</p> 
        `;

        this.transportList.appendChild(truckListItem);

        localStorage.setItem('transports', JSON.stringify(this.transportList.innerHTML));
    }

    addShip(e) {
        e.preventDefault();
        const id = document.getElementById('ship-id').value;
        const model = document.getElementById('ship-model').value;
        const name = document.getElementById('ship-name').value;
        const producedYear = document.getElementById('ship-produced-year').value;
        const capacity = document.getElementById('ship-capacity').value;
        const averageSpeed = document.getElementById('ship-average-speed').value;
        const countOfTeam = document.getElementById('team-count').value;

        const shipItem = new Ship(id, model, name, producedYear, capacity, averageSpeed, countOfTeam);

        const shipListItem = document.createElement('li');
        shipListItem.innerHTML = `
        <p>id - ${shipItem._id}</p>
        <p>Model - ${shipItem._model}</p>
        <p>Serial number/Name - ${shipItem._name}</p> 
        <p>Produced year - ${shipItem._producedYear}</p> 
        <p>Capacity - ${shipItem.showCapacityInPounds}</p> 
        <p>Average speed - ${shipItem.showAverageSpeed}</p> 
        <p>Count of Team - ${shipItem._countOfTeam}</p> 
        `;

        this.transportList.appendChild(shipListItem);

        localStorage.setItem('transports', JSON.stringify(this.transportList.innerHTML));
    }

    render() {
        if (localStorage.getItem('transports') === null) {
            this.transportList.innerHTML = '';
        } else {
            const refreshedTransportList = localStorage.getItem('transports');
            this.transportList.innerHTML =  JSON.parse(refreshedTransportList);
        }
    }
}