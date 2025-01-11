export default interface Education {
    institucion: String,
    titulo: String,
    fechaInicio: String,
    fechaFin: Date,
    descripcion: { type: String, maxlength: 500 },
    skillTitle: String,
    skillDescription: { type: String, maxlength: 300 },
    tecnologias: [{ type: String }]
}
