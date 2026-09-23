"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pets_1 = require("./data/pets");
const PORT = 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// const route = express.Router()
app.get("/", async function (req, res) {
    try {
        const data = pets_1.pets;
        res.status(200).json(data);
    }
    catch {
        console.log("error catch");
    }
});
// 404 catch all
app.use((req, res) => {
    res.status(404).json({ message: "no route found" });
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
