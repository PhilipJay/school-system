const Attendance = require('../../models/Attendance');

module.exports = async ( _id, dataObj ) => {

    try{
        await Attendance.updateOne({ _id },  dataObj)
        return true
    }
    catch (err){
        return false
    }
}