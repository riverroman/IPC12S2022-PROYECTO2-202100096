"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalplayers = [
    //BELGICA
    {
        id: 1,
        nombre: "Kevin",
        apellido: "Bruyne",
        seleccion: "BELGICA",
        region: "UEFA",
        edad: "31 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/142263.jpg?fallback=png",
    },
    {
        id: 2,
        nombre: "Eden",
        apellido: "Hazard",
        seleccion: "BELGICA",
        region: "UEFA",
        edad: "31 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/87809.jpg?fallback=png",
    },
    {
        id: 3,
        nombre: "Thibaut",
        apellido: "Courtois",
        seleccion: "BELGICA",
        region: "UEFA",
        edad: "30 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/140652.jpg?fallback=png",
    },
    {
        id: 4,
        nombre: "Romelu",
        apellido: "Lukaku",
        seleccion: "BELGICA",
        region: "UEFA",
        edad: "29 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/142964.jpg?fallback=png",
    },
    {
        id: 5,
        nombre: "Yannick",
        apellido: "Carrasco",
        seleccion: "BELGICA",
        region: "UEFA",
        edad: "29 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/199611.jpg?fallback=png",
    },
    {
        id: 6,
        nombre: "Karim",
        apellido: "Benzema",
        seleccion: "FRANCIA",
        region: "UEFA",
        edad: "34 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/29566.jpg?fallback=png",
    },
    {
        id: 7,
        nombre: "Hugo",
        apellido: "Lloris",
        seleccion: "FRANCIA",
        region: "UEFA",
        edad: "35 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/36826.jpg?fallback=png",
    },
    {
        id: 8,
        nombre: "Kingsley",
        apellido: "Coman",
        seleccion: "FRANCIA",
        region: "UEFA",
        edad: "26 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/227375.jpg?fallback=png",
    },
    {
        id: 9,
        nombre: "Ousmane",
        apellido: "Dembele",
        seleccion: "FRANCIA",
        region: "UEFA",
        edad: "25 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/306752.jpg?fallback=png",
    },
    {
        id: 10,
        nombre: "Raphael",
        apellido: "Varane",
        seleccion: "FRANCIA",
        region: "UEFA",
        edad: "29 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/176981.jpg?fallback=png",
    },
    //GERMANY
    {
        id: 11,
        nombre: "Manuel",
        apellido: "Neuer",
        seleccion: "ALEMANIA",
        region: "UEFA",
        edad: "36 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/21516.jpg?fallback=png",
    },
    {
        id: 12,
        nombre: "Joshua",
        apellido: "Kimmich",
        seleccion: "ALEMANIA",
        region: "UEFA",
        edad: "27 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/177925.jpg?fallback=png",
    },
    {
        id: 13,
        nombre: "Thomas",
        apellido: "Muller",
        seleccion: "ALEMANIA",
        region: "UEFA",
        edad: "33 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/97332.jpg?fallback=png",
    },
    {
        id: 14,
        nombre: "Leon",
        apellido: "Goretzka",
        seleccion: "ALEMANIA",
        region: "UEFA",
        edad: "27 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/175376.jpg?fallback=png",
    },
    {
        id: 15,
        nombre: "Marco",
        apellido: "Reus",
        seleccion: "ALEMANIA",
        region: "UEFA",
        edad: "33 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/70896.jpg?fallback=png",
    },
    //ARGENTINA
    {
        id: 16,
        nombre: "Lionel",
        apellido: "Messi",
        seleccion: "ARGENTINA",
        region: "CONMEBOL",
        edad: "35 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/26622.jpg?fallback=png",
    },
    {
        id: 17,
        nombre: "Lautaro",
        apellido: "Martinez",
        seleccion: "ARGENTINA",
        region: "CONMEBOL",
        edad: "25 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/335049.jpg?fallback=png",
    },
    {
        id: 18,
        nombre: "Rodrigo",
        apellido: "Paul",
        seleccion: "ARGENTINA",
        region: "CONMEBOL",
        edad: "28 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/213013.jpg?fallback=png",
    },
    {
        id: 19,
        nombre: "Angel",
        apellido: "Di María",
        seleccion: "ARGENTINA",
        region: "CONMEBOL",
        edad: "34 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/43864.jpg?fallback=png",
    },
    {
        id: 20,
        nombre: "Paulo",
        apellido: "Dybala",
        seleccion: "ARGENTINA",
        region: "CONMEBOL",
        edad: "28 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/205118.jpg?fallback=png",
    },
    //SENEGAL
    {
        id: 21,
        nombre: "Sadio",
        apellido: "Mané",
        seleccion: "SENEGAL",
        region: "AFRICA",
        edad: "30 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/205026.jpg?fallback=png",
    },
    {
        id: 22,
        nombre: "Kalidou",
        apellido: "Koulibaly",
        seleccion: "SENEGAL",
        region: "AFRICA",
        edad: "31 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/169885.jpg?fallback=png",
    },
    {
        id: 23,
        nombre: "Edouard",
        apellido: "Mendy",
        seleccion: "SENEGAL",
        region: "AFRICA",
        edad: "30 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/361214.jpg?fallback=png",
    },
    {
        id: 24,
        nombre: "Idrissa",
        apellido: "Gueye",
        seleccion: "SENEGAL",
        region: "AFRICA",
        edad: "33 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/170589.jpg?fallback=png",
    },
    {
        id: 25,
        nombre: "Boulaye",
        apellido: "Dia",
        seleccion: "SENEGAL",
        region: "AFRICA",
        edad: "25 años",
        imagen: "https://s.hs-data.com/bilder/spieler/gross/444053.jpg?fallback=png",
    },
];
class jugadoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/usuarios', (req, res) => {
            res.send(totalplayers);
        });
        this.router.get('/totalplayers', (req, res) => {
            res.send(totalplayers);
        });
        this.router.get('/nombre/:nombre', (req, res) => {
            const jugador = this.jugadorpornombre(req.params.nombre);
            res.send(jugador);
        });
        this.router.get('/seleccion/:nombre', (req, res) => {
            const jugador = this.jugadorporseleccion(req.params.nombre);
            res.send(jugador);
        });
        this.router.get('/region/:nombre', (req, res) => {
            const jugador = this.jugadorporregion(req.params.nombre);
            res.send(jugador);
        });
    }
    jugadorpornombre(nombreJugador) {
        return totalplayers.find(dato => dato.nombre == nombreJugador);
    }
    jugadorporseleccion(nombreSeleccion) {
        let tempo = [];
        for (const jugador of totalplayers) {
            if (jugador.seleccion == nombreSeleccion) {
                tempo.push(jugador);
            }
        }
        return tempo;
    }
    jugadorporregion(nombreRegion) {
        let tempo1 = [];
        for (const jugador of totalplayers) {
            if (jugador.region == nombreRegion)
                tempo1.push(jugador);
        }
        return tempo1;
    }
}
const JugadoresRouter = new jugadoresRoutes();
exports.default = JugadoresRouter.router;
