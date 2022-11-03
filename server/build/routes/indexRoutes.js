"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/carnet', (req, res) => res.send("202100096 - RIVER ANDERSON, ISMALEJ ROMAN"));
    }
}
const indexRoutes = new IndexRouter();
exports.default = indexRoutes.router;
