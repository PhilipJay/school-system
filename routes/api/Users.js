const express = require('express');
const router = express.Router();

const createUser = require('../users/Create')
const retrieveUser = require('../users/Retrieve')
const updateUser = require('../users/Update')
const deleteUser = require('../users/Delete')

router.post('/create', async ( req, res ) => {
	const result = await createUser(req.body);
	 
	if (result){
		res
		  .status(200)
		  .send({
			  status: result,
			  message: 'Successfully Created'
		  })
	} else {
		res
		  .status(500)
		  .send({
			  status: result,
			  message: 'Request Failed'
		  })
	}
})

router.get('/', async (req, res) => {
	const result = await retrieveUser(req.query);

	if (result){
		res
		  .status(200)
		  .send(result)
	} else {
		res
		  .status(500)
		  .send({
			  status: result,
			  message: 'Request Failed'
		  })
	}
})

router.post('/update', async ( req, res ) => {
	const { _id, dataObj } = req.body

	const result = await updateUser( _id, dataObj );

	if (result){
		res
		  .status(200)
		  .send({
			  status: result,
			  message: 'Successfully Updated'
		  })
	} else {
		res
		  .status(500)
		  .send({
			  status: result,
			  message: 'Request Failed'
		  })
	}
})

router.post('/delete', async ( req, res ) => {
	const { _id } = req.body
	const result = await deleteUser(_id);

	if (result){
		res
		  .status(200)
		  .send({
			  status: result,
			  message: 'Successfully Delete'
		  })
	} else {
		res
		  .status(500)
		  .send({
			  status: result,
			  message: 'Request Failed'
		  })
	}
})

module.exports = router;