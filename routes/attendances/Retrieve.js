const Attendance = require('../../models/Attendance');

module.exports = async() => {
    try{
        const result = await Attendance.find()
        return result
    }
    catch (err) {
        return[]
    }
}
