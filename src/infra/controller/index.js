export default class MainController {

    constructor ({httpServer, getCities}) {
        httpServer.on("get", "/api/v1/cities", async function (params, data) {
			const output = await getCities.execute();
			return output;
		}); 

    }

}