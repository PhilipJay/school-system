const User = require('../../models/Users');

module.exports = async( _id ) => {
    try{
        await User.deleteOne({ _id })
        return true
    }
    catch (err) {
        return false
    }
}
