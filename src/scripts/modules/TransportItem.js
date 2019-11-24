export default class TransportItem {
    constructor(props) {
        this._id = props.id;
        this._model = props.model;
        this._producedYear = props.producedYear;
        this._capacity = props.capacity;
        this._averageSpeed = props.averageSpeed;
    }

    get showCapacityInPounds() {
        const pound = 2.2046;
        const capacityInPounds = (this._capacity * pound).toFixed();
        return `${capacityInPounds} pounds`;
    }
}