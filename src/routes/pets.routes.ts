import express from "express";
import type { Router } from "express";
import { getPetById, getPets } from "../controllers/pets.controllers";
import { validateNumericId } from "../middlewares/pets.middleware";
import { pleaseAuth } from "../middlewares/pleaseAuth";

export const petRouter:Router = express.Router()

petRouter.get("/", getPets);

petRouter.get("/:id", pleaseAuth, validateNumericId, getPetById)
