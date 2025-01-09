const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    tecnologias: [{ type: String }], // Lista de tecnologías utilizadas
    categoria: { type: String, required: true },
    urlGitHub: { type: String }, // URL del proyecto o demo
    urlDemo: { type: String }, // URL del proyecto o demo
    imagenDestacada: { type: String }, // URL de la imagen
  },
  { timestamps: true, versionKey: false }
);

const Project = model("Project", projectSchema);
module.exports = Project;
