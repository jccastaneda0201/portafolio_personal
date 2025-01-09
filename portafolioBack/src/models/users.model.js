const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    datosPersonales: {
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      fechaNacimiento: { type: Date, required: true },
    },
    descripcion: {
      bio: { type: String, maxlength: 500 },
      intereses: [{ type: String }], // Lista de intereses
    },
    contacto: {
      nombre: { type: String },
      email: { type: String, required: true, unique: true },
      topic: { type: String },
      mensaje: { type: String },
    },
    redesSociales: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
      github: { type: String },
      websiteURL: { type: String },
    },
  },
  { timestamps: true, versionKey: false }
);

const User = model("user", userSchema);
module.exports = User;
