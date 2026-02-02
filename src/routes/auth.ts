import express,{ Router } from "express";
const app=express()
class TodoRoutes{
        path:string="/todos";
        route:Router=express.Router();
        initializeRoutes(){
                this.route.get(this.path,(req,res)=>{
                        res.send("Hello World")
                })
        }
        // initializeRoute(){
        //         this.app.use("/")
        // }
}
export default TodoRoutes;