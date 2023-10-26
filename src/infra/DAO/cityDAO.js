import citiesJSON from "../../../cities.json"
export default class  CityDAO{
    #cities
    constructor(){
        this.#cities=citiesJSON
    }
    async findAll(){
        return  this.#cities
    }
}