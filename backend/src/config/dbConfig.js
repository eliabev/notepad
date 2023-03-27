const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://eliabev:E1yXT1TXUMCakdPc@cluster0.pcdoaz5.mongodb.net/notepad?retryWrites=true&w=majority';

const connection = mongoose.connect(connectionString, {
    // next 2 lines just to remove warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;