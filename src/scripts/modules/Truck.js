import TransportItem from './TransportItem.js';

export default class Truck extends TransportItem {
    constructor(id, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas) {
        super(id, model ,producedYear, capacity, averageSpeed);
        this._licensePlate = licensePlate;
        this._typeOfGas = typeOfGas;
    }

    get showAverageSpeed() {
        return `${this._averageSpeed} km`;
    }

}