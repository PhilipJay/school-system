const Attendance = require('../../models/Attendance');

module.exports = async (dataObj) => {
    try{
        await Attendance.insertMany({
        	userId: dataObj.userId,
            date: dataObj.date,
            status: dataObj.status
        })
        return true
    }
    catch (err){
        return false
    }
}