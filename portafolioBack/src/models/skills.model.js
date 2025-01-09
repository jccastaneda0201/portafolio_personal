const { Schema, model } = require("mongoose");

const skillSchema = new Schema(
  {
    nombre: { type: String, required: true }, // Nombre de la habilidad
    descripcion: { type: String, maxlength: 300 }, // Breve descripción de la habilidad
    tecnologias: [{ type: String }], // Lista de tecnologías utilizadas
  },
  { timestamps: true }
); // Agrega createdAt y updatedAt automáticamente

const Skill = model("Skill", skillSchema);
module.exports = Skill;
