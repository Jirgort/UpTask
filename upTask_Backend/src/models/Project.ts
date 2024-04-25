import mongoose, {Schema, Document} from "mongoose";

export type ProjectType = Document & {
    projectName: string
    clientName: string
    description: string
}

const ProjectSchema: Schema = new Schema ({
    projectName: {
        type : String,
        require: true,
        trim: true,
    },

    clientName: {
        type : String,
        require: true,
        trim: true,
    },
    description: {
        type : String,
        require: true,
        trim: true,
    },
    
})

// definir el modelo
// "ProjectType" object generic para obtener las caracteristicasdel modelo
const Project = mongoose.model<ProjectType>("Project", ProjectSchema)
export default Project