/*
[
    "Município;Comunas;Distritos",
    "Icolo-e-Bengo; 	Cassoneca, Cabiri, Bom Jesus, Caculo Cahango, Quiminha; 	Catete, Bela Vista",
    "Luanda;;Sambizanga, Rangel, Maianga, Ingombota, Samba, Neves Bendinha, Ngola Kiluanje",
    "Quiçama;Muxima, Demba Chio, Quixinge, Mumbondo, Caboledo;Sem distritos",
    "Cacuaco;Cacuaco, Quicolo, Funda; 	Kikolo, Cacuaco, Mulenvos de Baixo, Sequele",
    "Cazenga;;Cazenga, Hoji ya Henda, 11 de Novembro, Kima Kieza, Tala Hadi, Kalawenda",
    "Viana; 	Calumbo; 	Viana, Estalagem, Kikuxi, Baía, Zango, Vila Flôr",
    "Belas; 	Camama, Benfica, Vila Estoril, Ilha do Mussulo, Barra do Kwanza, Futungo de Belas, Ramiro; 	Quenguela, Morro dos Veados, Ramiros, Vila Verde, Cabolombo, Kilamba",
    "Kilamba Kiaxi; ;Golfe, Sapú, Palanca, Nova Vida",
    "Talatona; 	Mussulo; 	Benfica, Futungo de Belas, Lar do Patriota, Talatona, Camama, Cidade Universitária"
]
[
    "Município;Comunas;Distritos",
    "Ambaca;Camabatela,Tango, Máua, Bindo, Luinga; 	Sem distritos",
    "Banga;Banga,Caculo Cabaça, Aldeia Nova, Cariamba; 	Sem distritos",
    "Bolongongo;Bolongongo,Terreiro, Quiquiemba; 	Sem distritos",
    "Cambambe;Dondo, Massangano, Dange ya Menha, Zenza do Itombe, São Pedro da Quilemba;Sem distritos",
    "Cazengo;Ndalatando, Canhoca;Sem distritos",
    "Golungo Alto;Golungo Alto, Cambondo, Cêrca, Quiluanje;Sem distritos",
    "Gonguembo;Quilombo dos Dembos, Camame, Cavunga;Sem distritos",
    "Lucala;Lucala Quiangombe; Sem distritos",
    "Quiculungo;Quiculungo;Sem distritos",
    "Samba Cajú;Quiculungo;Sem distritos"
]
*/
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
            "communes":_county[1].split(",").length>0?_county[1].split(",").map(c=>c.trim()):[],
            "districts":_county[2].trim()==='Sem distritos'?[]:_county[2].split(",").map(c=>c.trim())
        })
        
    }
    return JSON.stringify(_counties)

}
