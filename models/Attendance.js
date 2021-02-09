const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const AttendanceSchema = new Schema({
	userId: { type: Number },
	date:{ type: Date, default: Date.now() },
	status: { type: Boolean },
});

module.exports = Item = mongoose.model('Attendance', AttendanceSchema)