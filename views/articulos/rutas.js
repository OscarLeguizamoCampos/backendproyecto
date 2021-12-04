import Express from 'express';
import {
  // queryAllVehicles,
  // crearVehiculo,
  // editarVehiculo,
  // eliminarVehiculo,
  // consultarVehiculo,
  queryAllArticles,
  crearArticulo,
  editarArticulo,
  eliminarArticulo,
  consultarArticulo,
} from '../../controllers/articulos/controller.js';

// const rutasVehiculo = Express.Router();

// const genercCallback = (res) => (err, result) => {
//   if (err) {
//     console.log('error', err);
//     res.status(500).json({ error: err });
//   } else {
//     res.json(result);
//   }
// };

// rutasVehiculo.route('/vehiculos').get((req, res) => {
//   console.log('alguien hizo get en la ruta /vehiculos');
//   queryAllVehicles(genercCallback(res));
// });

// rutasVehiculo.route('/vehiculos').post((req, res) => {
//   crearVehiculo(req.body, genercCallback(res));
// });

// rutasVehiculo.route('/vehiculos/:id').get((req, res) => {
//   console.log('alguien hizo get en la ruta /vehiculos');
//   consultarVehiculo(req.params.id, genercCallback(res));
// });

// rutasVehiculo.route('/vehiculos/:id').patch((req, res) => {
//   editarVehiculo(req.params.id, req.body, genercCallback(res));
// });

// rutasVehiculo.route('/vehiculos/:id').delete((req, res) => {
//   eliminarVehiculo(req.params.id, genercCallback(res));
// });

// export default rutasVehiculo;


const rutasArticulo = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    console.log('error', err);
    res.status(500).json({ error: err });
  } else {
    res.json(result);
  }
};

rutasArticulo.route('/articulos').get((req, res) => {
  console.log('alguien hizo get en la ruta /articulos');
  queryAllArticles(genercCallback(res));
});

rutasArticulo.route('/articulos').post((req, res) => {
  crearArticulo(req.body, genercCallback(res));
});

rutasArticulo.route('/articulos/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /articulos');
  consultarArticulo(req.params.id, genercCallback(res));
});

rutasArticulo.route('/articulos/:id').patch((req, res) => {
  editarArticulo(req.params.id, req.body, genercCallback(res));
});

rutasArticulo.route('/articulos/:id').delete((req, res) => {
  eliminarArticulo(req.params.id, genercCallback(res));
});

export default rutasArticulo;
