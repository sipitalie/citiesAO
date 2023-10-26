import { CityDAO } from "../../infra/DAO/cityDAO.js";


/** @typedef {object} IProvicie
 * @property {number} totalOfProvinces
 * @property {object} provinces
 * @property {string} provinces.id
 * @property {string} provinces.name
 * @property {string} provinces.capital
 * @property {number} provinces.totalOfcounties
 * @property {object[]} provinces.counties
 * @property {string} provinces.counties.id
 * @property {string} provinces.counties.name
 * @property {string[]} provinces.counties.communes
 * @property {string[]} provinces.counties.districts
 */

export default class GetCities {
    #citiesDAO

    /**
     *@param {CityDAO} cityDAO
    */
    constructor(cityDAO){
        this.#citiesDAO=cityDAO
    }
    /**
     * @returns {IProvicie[]} 
    */
    async execute(){
        const cities= await this.#citiesDAO.findAll()
       
        return {
            totalOfProvinces:cities.length,
            provinces: cities.map(city=>{
                return {
                    totalOfcounties:city.counties.length,
                    ...city
                }
            })
        }
    }
}