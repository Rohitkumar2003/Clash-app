"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const Port = process.env.Port || 4000;
app.get("/", (req, res) => {
    res.json(`server successfully start at Port no : ${Port}`);
});
app.listen(Port, () => {
    console.log(`server start at port no: ${Port}`);
});
