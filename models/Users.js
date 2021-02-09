const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const UserSchema = new Schema({
	name: {
		firstName: {
			type: String,
			require: true	
		},
		lastName: {
			type: String,
			require: true	
		},
		middleName: { type: String },
		prefix: { type: String },
	},
  	gender: { type: Number },  // gender: 0 = male, 1 = female
    active: { type: Boolean }, // active: 0 = inactive, 1 = active
    type: { type: String },    // type: 0 = student, 1 = teacher
    birthday: { type: Date },
	// sectionId: { type: Number },
    // examId: { type: Number },
    // attendanceId: { type: Number },
    // scheduleId: { type: Number },
    // subjectId: { type: Number },
});

module.exports = Item = mongoose.model('User', UserSchema)