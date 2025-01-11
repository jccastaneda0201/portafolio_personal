export default interface Laboral {
    titulo: String,
    empresa: String,
    ubicacion: String,
    fechaInicio: Date,
    fechaFin: Date,
    actual: Boolean,
    descripcion: String,
    habilidades: [{ type: String }]
}
