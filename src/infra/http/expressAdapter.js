
import express from "express";


export default class ExpressAdapter {
	app;

	constructor () {
		this.app = express();
		this.app.use(express.json());
	}

	on(method, url, callback){
        this.app[method](url, async function (req, res) {
            try {
                const output = await callback(req.params, req.body);
                res.json(output);
                } catch (error){
                    return res.status(500).json({error:"Server Error"})
                }
            });	
	}

	listen(port){
		this.app.listen(port);
	}

}