const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    tecnologias: [{ type: String }],
    categoria: { type: String, required: true },
    urlGitHub: { type: String },
    urlDemo: String,
    imagenDestacada: String,
  },
  { timestamps: true, versionKey: false }
);

const Project = model("project", projectSchema);
module.exports = Project;
