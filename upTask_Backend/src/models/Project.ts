import mongoose, {Schema, Document} from "mongoose";

export interface IProject extends Document {
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
const Project = mongoose.model<IProject>("Project", ProjectSchema)
export default Project