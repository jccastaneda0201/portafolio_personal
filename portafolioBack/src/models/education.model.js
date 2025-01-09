const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
  {
    institucion: { type: String, required: true },
    titulo: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: Date,
    descripcion: { type: String, maxlength: 500 },
    skillTitle: { type: String, required: true },
    skillDescription: { type: String, maxlength: 300 },
    tecnologias: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
);

const Education = model("education", educationSchema);
module.exports = Education;
