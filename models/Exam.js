const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const ExamSchema = new Schema({
	userId: { type: Number },
	ExamId: { type: Number },
	type:{ type: String },
	score:{ type: Number },


});

module.exports = Item = mongoose.model('Exam', ExamSchema)