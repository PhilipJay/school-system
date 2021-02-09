const User = require('../../models/Users');

module.exports = async ( _id, dataObj ) => {

    try{
        await User.updateOne({ _id },  dataObj)
        return true
    }
    catch (err){
        return false
    }
}