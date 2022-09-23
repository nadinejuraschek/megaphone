const   mongoose    = require("mongoose"),
        dotenv      = require("dotenv");

dotenv.config();

mongoose.set("debug", true);

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGO_URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, function() {
    console.log('\033[32m', "DB connected successfully.");
});

module.exports.User = require("./user");
module.exports.Message = require("./message");