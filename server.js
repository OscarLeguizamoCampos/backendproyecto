// hacer el import de express tradicional
// const express = require('express');

// hacer el nuevo import
import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

import rutasArticulo from './views/articulos/rutas.js';
import rutasUsuario from './views/usuarios/rutas.js';
import rutasVenta from './views/ventas/rutas.js';
import autorizacionEstadoUsuario from './middleware/autorizacionEstadoUsuario.js';

dotenv.config({ path: './.env' });

const app = Express();

app.use(Express.json());
app.use(Cors());

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-jb58a4-s.us.auth0.com/.well-known/jwks.json'
}),
audience: 'concesonario-2',
issuer: 'https://dev-jb58a4-s.us.auth0.com/',
algorithms: ['RS256']
});

// 4 y 5: enviarle el token a auth0 para que devuelva si es valido o no
app.use(jwtCheck);

// app.use(autorizacionEstadoUsuario);

app.use(rutasArticulo);
app.use(rutasUsuario);
app.use(rutasVenta);

const main = () => {
  return app.listen(process.env.PORT, () => {
    console.log(`escuchando puerto ${process.env.PORT}`);
  });
};

conectarBD(main);
