const User = require('../../models/Users');

module.exports = async(query) => {
    try{
        const result = await User.find(query)
        return result
    }
    catch (err) {
    	console.log(err)
        return[]
    }
}
