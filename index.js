const express = require('express');
const app = express();


app.post('/mensaje', (req, res) => {
  const mensaje = req.body.mensaje; 
  
  
  
  res.json({ respuesta: '¡Hola profe!' + mensaje });
});


app.listen(4000, () => {
  console.log('El servidor funciona en el puerto 3000');
});
