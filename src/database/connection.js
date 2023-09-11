const mongoose = require("mongoose");

async function connectDataBase() {
    await mongoose
        .connect(
            'mongodb+srv://gsbloogs194:1FMwBznOo9HxB9HC@nodesystem.kyzz3ns.mongodb.net/?retryWrites=true&w=majority'
        )
}

module.exports = connectDataBase;