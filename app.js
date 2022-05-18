const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //body parse se encarga de analizar, 
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
    res.send('Esta es mi primera app de express!')
})


app.post('/register', (req, res) => { //uma funcion con dos parametrps
    let name = req.body.name;
    let password = req.body.password;
    res.send(`Su nombre es:  ${name} y su password es:  ${password}`);//respuestas del servidor
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

