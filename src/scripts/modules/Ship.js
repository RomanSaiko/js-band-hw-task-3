import TransportItem from './TransportItem.js';

export default class Ship extends TransportItem {
    constructor(props) {
        super(props);
        this._countOfTeam = props.countOfTeam;
        this._name = props.name;
    }

    get showAverageSpeed() {
        return `${this._averageSpeed} nm`;
    }
}