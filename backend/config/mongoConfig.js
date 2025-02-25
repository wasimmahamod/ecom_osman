const mongoose = require('mongoose');

let mongoConfig = () => {
mongoose
.connect("mongodb+srv://mernian100:mYbI0xIj4UQG9Pye@cluster0.hs2vrz1.mongodb.net/ecom?retryWrites=true&w=majority")
.then(() => console.log('Database Connected!'))
};

module.exports = mongoConfig;