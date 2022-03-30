const express = require('express');
const router = express.Router();
const consolasController = require('../Controller/consolas.controller');

//controlador

router.get('/', consolasController.getConsolas);
router.post('/', consolasController.addConsolas);
/*router.put('./',);*/
router.delete('/:id', consolasController.deleteConsolas); 

module.exports = router;