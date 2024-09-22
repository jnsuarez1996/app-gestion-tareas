// const db = require('../db');// Importa la conexión a la base de datos

// const getUserById = (req, res) => {
//   const userId = req.params.id;

//   db.query('SELECT id FROM users WHERE id = ?', [userId], (err, results) => {
//     if (err) {

//       return res.status(500).json({ error: 'Error al obtener los datos del usuario' });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ error: 'Usuario no encontrado' });
//     }

//     res.status(200).json(results[0]);
//   });
// };

// module.exports = { getUserById };

const db = require('../db'); // Importa la conexión a la base de datos
const User = require('../models/User');

const userController = {

    getUserById: (req, res) => {
    const userId = req.params.id;
    User.findUserById(userId, (err, users) => {
        console.log(users);
      if (err) return res.status(500).send('Error al obtener las tareas');
      res.status(200).send(users);
    });
  },
}

module.exports = userController;

