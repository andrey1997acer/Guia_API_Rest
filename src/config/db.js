const mongoose = require('mongoose');
 
const conectarDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost/anounces', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Conexion establecida');
    }catch(error){
        console.log('Hubo un error');
        console.log(error);
 
        // Detener la app
        process.exit(1);
    }
}
 
module.exports = conectarDB;





