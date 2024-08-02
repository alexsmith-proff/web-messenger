import { makeAutoObservable } from 'mobx';

class StoreModel {
    activeItemConference: number = 0
    constructor(){
        makeAutoObservable(this);
    }

    setActiveItemConference(value: number) {
        this.activeItemConference = value
    }
}

const storeModel = new StoreModel()

export default storeModel