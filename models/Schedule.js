const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const ScheduleSchema = new Schema({
	startTime:{ type: Date },
	endTime:{ type: Date }
	subjectId: { type: Number },
	sectionId: { type: Number },
});

module.exports = Item = mongoose.model('Schedule', ScheduleSchema)