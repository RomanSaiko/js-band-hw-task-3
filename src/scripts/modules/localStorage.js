export default class LocalStorage {
    constructor() {
        if (!localStorage.getItem('JS-Band-token')) {
            localStorage.setItem('JS-Band-token', '1234');
        }
    }
    static getLocalStorageData() {
        return JSON.parse(localStorage.getItem('transports'));
    }

    static setLocalStorageData(setList) {
        return localStorage.setItem('transports', JSON.stringify(setList));
    }
}
