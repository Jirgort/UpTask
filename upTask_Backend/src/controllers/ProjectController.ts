import type { Request, Response } from "express"
export class ProjectController{

    //Muestra todos los proyectos
    static getAllProjects= async( req: Request, res: Response)=>{
        res.send("Todos los proyectos")
    }
}