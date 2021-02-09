const User = require('../../models/Users');

module.exports = async (data) => {
    try{
        const { name } = data
        await User.insertMany({
        	name:{
        		firstName: name.firstName,
        		lastName: name.lastName,
        		middleName: name.middleName,
        		prefix: name.prefix,
        	},
            gender: data.gender,
            birthday:data.birthday,
            active: data.active,
            type: data.type
        })
        return true
    }
    catch (err){
        return false
    }
}