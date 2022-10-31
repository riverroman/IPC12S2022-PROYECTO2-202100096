import { Router } from "express";


const usuarios = [

    {

        Usuario:  "RIVER",
        Password: "1234",
    }
        

];

class UsuarioRoutes {

        public router:  Router = Router();

        constructor() {

            this.config();
        }


        config(): void{

            this.router.get('/usuario', (req,res) => {

                    res.send(usuarios);
            });
        }
  }

  const usuariosRouter = new UsuarioRoutes()
  export default usuariosRouter.router;