// Scrpt encargado de contener las rutas de la API

import { Router } from "express";

const router = Router();

// routes

// raiz
router.get("/", (req, res) => res.send("Hello world"));
// ping
router.get("/ping", (req, res) => res.send("pong"));

export default router;
