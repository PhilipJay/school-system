const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const SubjectSchema = new Schema({
	name:{ type: String },
	userId: { type: Number },
	examId: { type: Number },
});

module.exports = Item = mongoose.model('Subject', SubjectSchema)