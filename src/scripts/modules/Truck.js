import TransportItem from './TransportItem.js';

export default class Truck extends TransportItem {
    constructor(props) {
        super(props);
        this._licensePlate = props.licensePlate;
        this._typeOfGas = props.typeOfGas;
    }

    get showAverageSpeed() {
        return `${this._averageSpeed} km`;
    }

}