const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    if (!process.env.MONGODB_URL) {
        console.error("MONGODB_URL is not set in environment. Add it to server/.env");
        process.exit(1);
    }

    console.log('mongodb_uri', process.env.MONGODB_URL);

    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};