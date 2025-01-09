const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    titulo: { type: String, required: false },
    descripcion: { type: String, required: false },
    tecnologias: [{ type: String }],
    categoria: { type: String, required: false },
    urlGitHub: String,
    urlDemo: String,
    imagenDestacada: String,
  },
  { timestamps: true, versionKey: false }
);

const Project = model("project", projectSchema);
module.exports = Project;
