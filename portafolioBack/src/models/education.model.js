const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
  {
    education: {
      institucion: { type: String, required: true },
      titulo: { type: String, required: true },
      fechaInicio: { type: Date, required: true },
      fechaFin: { type: Date },
      descripcion: { type: String, maxlength: 500 },
    },

    skills: {
      titulo: { type: String, required: true },
      descripcion: { type: String, maxlength: 300 },
      tecnologias: [{ type: String }],
    },
  },
  { timestamps: true, versionKey: false }
);

const Education = model("education", educationSchema);
module.exports = Education;
