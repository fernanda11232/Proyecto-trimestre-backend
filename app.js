const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //body parse se encarga de analizar, 
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
    res.send('Esta es mi primera app de express!')
})


app.post('/register', (req, res) => { //uma funcion con dos parametrps
    let names = req.body.names;
    let usernames= req.body.usernames;
    let contact = req.body.contact;
    let gmail = req.body.gmail;
    let date = req.body.date;
    let gender = req.body.gender;
    let password = req.body.password;
    let confirmpassword = req.body.confirmpassword;
    return res.send(`Su nombre es:  ${names}, su apellido es: ${usernames}, su telefono es: ${contact}, su gmail es: ${gmail}, su fecha de nacimiento es: ${date}, su genero es: ${gender} y su password es:  ${password}, la comformacion de su contraseña es: ${confirmpassword}`);//respuestas del servidor
})

app.post('/login', (req, res) => { //uma funcion con dos parametrps
    let gmail = req.body.gmail;
    let password = req.body.password;
    return res.send(`su gamil es: ${gmail}, su contraseña es: ${password}`);//respuestas del servidor
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

/*get no se puede enviar una estrutura por que no tienen cuerpo
hacemos post cuando enviamos inf
body parses analiza el cuerpo de la solicitud
toma las propiedsdes extrae el body y lo convierte en un diccionario_ el body parser
res respuesta del usuario
req solicitud de cliente
``para formatear cadenas.

*/
//crear 2 repositorios 1 para el back y el otro para el Front
//ruta register y login, enviarla al repo
// 2.agregar las base de datos

