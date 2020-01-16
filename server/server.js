
require('./config/config');

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))//midleware
 
// parse application/json
app.use(bodyParser.json())//son midlaware


app.get('/usuario', function (req, res) {

  res.json('get Usuario');

})

app.post('/usuario', function (req, res) { // post:sirve tmb para crear nuevos registros registro 

let body = req.body;

    if (body.nombre === undefined) {
        
        res.status(400).json({// muestro el 400 un bad request


            ok: false,
            mensaje: 'El nombre es necesario'
    });

    }else{
        res.json({

            persona: body

        })
    }

  res.json({

      persona :body
      
  })

})
 
 app.put('/usuario/:id', function (req, res) {//el put sirve pra actualizar registro

    let id = req.params.id;

  res.json({
      
      id

  });

})

app.delete('/usuario', function (req, res) {

  res.json('delete Usuario');

});

app.listen(process.env.PORT, ()=>{

    console.log('Escuchando puerto: ' , process.env.PORT);
    
});