const express = require('express')
const router = express.Router()

// define the home page route
router.get('/vehicles', (req, res) => {
  res.json([
	  {
	  	make: 'Honda',
	  	model: 'Civic'
	  },
	  {
	  	make: 'Ford',
	  	model: 'Fiesta'
	  },
	  {
	  	make: 'Toyota',
	  	model: 'Corolla'
	  }
  ]);
})
// define the about route
router.get('/vehicles/:vehicleId', (req, res) => {
  res.json({
  	make: 'Mazda',
  	model: 'RX-7'
  });
})

module.exports = router