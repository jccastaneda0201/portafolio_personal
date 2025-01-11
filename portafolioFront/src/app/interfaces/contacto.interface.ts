export default interface Contacto {
    nombre: String,
    email: { type: String, unique: true },
    asunto: String,
    mensaje: String
}
