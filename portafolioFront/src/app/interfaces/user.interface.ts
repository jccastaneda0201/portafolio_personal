export default interface User {
    nombre: String,
    apellido: String,
    fechaNacimiento: Date,
    //About me
    aboutme: String,
    intereses: [{ type: String }],
    //redes sociales
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    github: String,
    websiteURL: String
}
