import { Router } from "express";
import jugadoresRoutes from "./jugadoresRoutes";

class IndexRouter {

public router: Router = Router();

    constructor() {

        this.config();

    }

    config(): void{

            this.router.get('/carnet', (req,res) => res.send("202100096 - RIVER ANDERSON, ISMALEJ ROMAN"));

    }

}

const indexRoutes = new IndexRouter();
export default indexRoutes.router;
