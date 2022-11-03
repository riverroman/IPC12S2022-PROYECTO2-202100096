import { Router } from "express";

const todosUsuarios = [
    {
        Usuario: "RIVER",
        Password: "1234"
    },

    {
        Usuario: "IPC1F",
        Password: "1234"
    },

    {
        Usuario: "JAVIER",
        Password: "1010"
    },

];

class UsuariosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/todos', (req, res) => {
            res.send(todosUsuarios);
        });
    }

}

const usuariosRouter = new UsuariosRoutes();
export default usuariosRouter.router;