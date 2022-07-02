const mongoose = require('mongoose');

const connectDB = async () => {

    const conn = await mongoose.connect('mongodb+srv://toyohide:hidechy4819@cluster0.hxkmy.mongodb.net/toyohide_db?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
    );

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
