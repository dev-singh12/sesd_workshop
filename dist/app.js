"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.port = 8080;
        this.app = (0, express_1.default)();
    }
    start_server() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on ${this.port}`);
        });
    }
}
exports.default = App;
