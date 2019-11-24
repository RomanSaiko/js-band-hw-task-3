import LocalStorage from './localStorage';
import TransportFactory from './TransportFactory';

export default class Vehicles {
    constructor() {
        const createVehicle = {
            createTruck : document.getElementById('create-truck'),
            createShip : document.getElementById('create-ship')
        };
        for (const key in createVehicle) {
            createVehicle[key].addEventListener('submit', this.addVehicle.bind(this));
        }
        this.transportList = document.getElementById('vehicle-list');
        this.render();
    }

    addVehicle(e) {
        e.preventDefault();
        let vehicleForm = e.target.id;
        let setList;
        if (vehicleForm === 'create-truck') {
            const truckProperties = {
                id: document.getElementById('truck-id').value,
                model: document.getElementById('truck-model').value,
                licensePlate: document.getElementById('license-plate').value,
                producedYear: document.getElementById('truck-produced-year').value,
                capacity: document.getElementById('truck-capacity').value,
                averageSpeed: document.getElementById('truck-average-speed').value,
                typeOfGas: document.getElementById('gas-type').value
            };
            const truckItem = new TransportFactory('truck', truckProperties);
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
            setList = this.transportList.innerHTML;
        } else {
            const shipProperties = {
                id: document.getElementById('ship-id').value,
                model: document.getElementById('ship-model').value,
                name: document.getElementById('ship-name').value,
                producedYear: document.getElementById('ship-produced-year').value,
                capacity: document.getElementById('ship-capacity').value,
                averageSpeed: document.getElementById('ship-average-speed').value,
                countOfTeam: document.getElementById('team-count').value
            };
            const shipItem = new TransportFactory('ship', shipProperties);
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
            setList = this.transportList.innerHTML;
        }
        LocalStorage.setLocalStorageData(setList);
    };

    render() {
        this.transportList.innerHTML = LocalStorage.getLocalStorageData();
    }
}