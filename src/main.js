import  GetCities  from "./app/useCases/getCities.js";
import  CityDAO  from "./infra/DAO/cityDAO.js";
import MainController from "./infra/controller/index.js";
import ExpressAdapter from "./infra/http/ExpressAdapter.js";
import 'dotenv/config'
async function init () {
	const port = process.env.ENVIRONMENT==="DEV"?3000:process.env.PORT
	const httpServer = new ExpressAdapter();
    const cityDAO = new CityDAO()
    const getCities= new GetCities(cityDAO )
	new MainController({httpServer,getCities});
	if(port){
		httpServer.listen(Number(port));
	}
	
}
init();