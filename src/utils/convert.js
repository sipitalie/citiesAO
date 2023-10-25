const value=["Município;Comunas;Distritos",
"Cabinda;Cabinda, Malembo, Tando Zinze;Sem distritos",
"Cacongo;Cacongo, Dinge, Massabi;Sem distritos",
"Buco-Zau;Buco Zau, Necuto, Inhuca;Sem distritos",
"Belize;Miconje, Belize, Luali;Sem distritos"]

/** @typedef {object} Icounty
 * @property {string} id
 * @property {string} name
 * @property {string[]} communes
 * @property {string[]} districts
 */
/**
 *@param {string[]} counties
 @returns {Icounty[]}
*/
function convertListOfCountyTojson(counties){
    const headers=counties.shift()
    /**
     *@type {Icounty[]}
    */
    const _counties=[]

    for (let county of counties){
        const _county=county.split(";")
        _counties.push({
            "id":!!_county[0]?_county[0].normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().replace(" ","_"):"",
            "name":_county[0],
            "communes":_county[1].split(","),
            "districts":_county[2]==='Sem distritos'?[]:_county[2].split(",")
        })
        
    }
    return JSON.stringify(_counties)

}

console.log(convertListOfCountyTojson(value))