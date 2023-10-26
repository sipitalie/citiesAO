import  GetCities  from "./app/useCases/getCities";
import  CityDAO  from "./infra/DAO/cityDAO";
import MainController from "./infra/controller/index";
import ExpressAdapter from "./infra/http/ExpressAdapter";

async function init () {
	const httpServer = new ExpressAdapter();
    const cityDAO = new CityDAO()
    const getCities=new GetCities(cityDAO )
	new MainController({httpServer,getCities});
	httpServer.listen(3000);
}

init();