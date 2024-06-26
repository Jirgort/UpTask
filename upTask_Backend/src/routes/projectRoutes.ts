import { Router } from "express";
import { body, param } from "express-validator"
import { ProjectController } from "../controllers/ProjectController";
import { handleInputError } from "../middleware/validation";

const router = Router()

router.post("/",
    body("projectName")
        .notEmpty().withMessage("El nombre del proyecto es obligatorio"),
    body("clientName")
        .notEmpty().withMessage("El nombre del cliente es obligatorio"),
    body("description")
        .notEmpty().withMessage("La descripción del proyecto es obligatoria"),
    handleInputError,

    ProjectController.createProject
)

router.get("/", ProjectController.getAllProjects)

router.get("/:id",
    param("id").isMongoId().withMessage("ID no valido"),
    handleInputError,
    ProjectController.getProjectById
)

router.put("/:id",
    param("id").isMongoId().withMessage("ID no valido"),
    body("projectName")
        .notEmpty().withMessage("El nombre del proyecto es obligatorio"),
    body("clientName")
        .notEmpty().withMessage("El nombre del cliente es obligatorio"),
    body("description")
        .notEmpty().withMessage("La descripción del proyecto es obligatoria"),
    handleInputError,
    ProjectController.updateProject


)
router.delete("/:id",
    param("id").isMongoId().withMessage("ID no valido"),
    handleInputError,
    ProjectController.deleteProject
)

export default router