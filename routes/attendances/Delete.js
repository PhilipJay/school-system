const Attendance = require('../../models/Attendance');

module.exports = async( _id ) => {
    try{
        await Attendance.deleteOne({ _id })
        return true
    }
    catch (err) {
        return false
    }
}
