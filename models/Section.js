const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const SectionSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	schoolYear: {
		start:{ type: Date },
		end:{ type: Date }
	}
	scheduleId: { type: Number },
	userId: { type: Number },
});

module.exports = Item = mongoose.model('Section', SectionSchema)