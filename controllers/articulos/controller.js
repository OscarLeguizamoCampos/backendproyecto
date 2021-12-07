import { ObjectId } from 'mongodb';
import { getDB } from '../../db/db.js';
 

const queryAllArticles = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('articulo').find({}).limit(50).toArray(callback);
};

const crearArticulo = async (datosArticulo, callback) => {
  if (
    Object.keys(datosArticulo).includes('name') &&
    Object.keys(datosArticulo).includes('brand') &&
    Object.keys(datosArticulo).includes('description') &&
    Object.keys(datosArticulo).includes('model') &&
    Object.keys(datosArticulo).includes('unit') &&
    Object.keys(datosArticulo).includes('cantidad')
  ) {
    const baseDeDatos = getDB();
    // implementar código para crear Artículo en la BD

    await baseDeDatos.collection('articulo').insertOne(datosArticulo, callback);
  } else {
    return 'error';
  }
};

const consultarArticulo = async (id, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('articulo').findOne({ _id: new ObjectId(id) }, callback);
};

const editarArticulo = async (id, edicion, callback) => {
  const filtroArticulo = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('articulo')
    .findOneAndUpdate(filtroArticulo, operacion, { upsert: true, returnOriginal: true }, callback);
};

const eliminarArticulo = async (id, callback) => {
  const filtroArticulo = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('articulo').deleteOne(filtroArticulo, callback);
};

export { queryAllArticles, crearArticulo, consultarArticulo, editarArticulo, eliminarArticulo };

// const queryAllVehicles = async (callback) => {
//   const baseDeDatos = getDB();
//   await baseDeDatos.collection('vehiculo').find({}).limit(50).toArray(callback);
// };

// const crearVehiculo = async (datosVehiculo, callback) => {
//   if (
//     Object.keys(datosVehiculo).includes('name') &&
//     Object.keys(datosVehiculo).includes('brand') &&
//     Object.keys(datosVehiculo).includes('model')
//   ) {
//     const baseDeDatos = getDB();
//     // implementar código para crear vehículo en la BD

//     await baseDeDatos.collection('vehiculo').insertOne(datosVehiculo, callback);
//   } else {
//     return 'error';
//   }
// };

// const consultarVehiculo = async (id, callback) => {
//   const baseDeDatos = getDB();
//   await baseDeDatos.collection('vehiculo').findOne({ _id: new ObjectId(id) }, callback);
// };

// const editarVehiculo = async (id, edicion, callback) => {
//   const filtroVehiculo = { _id: new ObjectId(id) };
//   const operacion = {
//     $set: edicion,
//   };
//   const baseDeDatos = getDB();
//   await baseDeDatos
//     .collection('vehiculo')
//     .findOneAndUpdate(filtroVehiculo, operacion, { upsert: true, returnOriginal: true }, callback);
// };

// const eliminarVehiculo = async (id, callback) => {
//   const filtroVehiculo = { _id: new ObjectId(id) };
//   const baseDeDatos = getDB();
//   await baseDeDatos.collection('vehiculo').deleteOne(filtroVehiculo, callback);
// };

// export { queryAllVehicles, crearVehiculo, consultarVehiculo, editarVehiculo, eliminarVehiculo };

