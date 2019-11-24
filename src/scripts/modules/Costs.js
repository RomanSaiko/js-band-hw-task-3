export default class Costs {
    constructor() {
        const createCost = document.getElementById('create-cost');
        createCost.addEventListener('submit', this.createCost.bind(this));
        this.costList = document.getElementById('cost-list');
        this.render();
    }

    createCost(e) {
        e.preventDefault();
        const costModel = document.getElementById('cost-model').value;
        const costCargo = document.getElementById('cost-cargo').value;
        const costDistance = document.getElementById('cost-distance').value;
        const costItem = {
            costModel,
            costCargo,
            costDistance
        };

        const costListItem = document.createElement('li');
        costListItem.innerHTML = `
        <p>Model: ${costItem.costModel}</p> 
        <p>Cost by kilogram: ${costItem.costCargo}</p> 
        <p>Cost by distance: ${costItem.costDistance}</p> 
        `;

        this.costList.appendChild(costListItem);
        localStorage.setItem('costs', JSON.stringify(this.costList.innerHTML));
    }

    render() {
        if (localStorage.getItem('costs') === null) {
            this.costList.innerHTML = '';
        } else {
            const refreshedCostList = localStorage.getItem('costs');
            this.costList.innerHTML =  JSON.parse(refreshedCostList);
        }
    }
}