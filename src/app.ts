import express, { Application } from "express";

class App {
    public app: Application;
    public port: number | string;

    constructor(port: number | string = 8080) {
        this.app = express();
        this.port = port;
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

export default App;
