const express = require('express');
const router = express.Router();

const createAttendance = require('../attendances/Create')
const retrieveAttendance = require('../attendances/Retrieve')
const updateAttendance = require('../attendances/Update')
const deleteAttendance = require('../attendances/Delete')

router.post('/create', async ( req, res ) => {
	const { dataObj } = req.body

	const result = await createAttendance(dataObj);
	
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
	const result = await retrieveAttendance();

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

	const result = await updateAttendance( _id, dataObj );

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
	const result = await deleteAttendance(_id);

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