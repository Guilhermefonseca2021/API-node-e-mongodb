const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    createdAT: {
        type: Date,
        default: Date.now()
    }
})
// esse model é uma tabela criada no banco de dados onde ficara gravado de acordo com nossa validacao
module.exports = mongoose.model('User', userSchema)