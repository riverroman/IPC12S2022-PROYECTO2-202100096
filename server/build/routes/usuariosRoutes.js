"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios = [
    {
        Usuario: "RIVER",
        Password: "1234",
    }
];
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/usuario', (req, res) => {
            res.send(usuarios);
        });
    }
}
const usuariosRouter = new UsuarioRoutes();
exports.default = usuariosRouter.router;
