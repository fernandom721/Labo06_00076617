function usuario(nombre,apellido,date,tel,correo){
    var user={
        name: nombre,
        lastname: apellido,
        fecha: date,
        telefono: tel,
        email: correo
    }
    return ("UserName: "+user.name+", LastName: "+user.lastname+ ", Nacimiento: "+user.fecha+", Telefono"+user.telefono+", Correo: "+user.email);
}