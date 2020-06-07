const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        fullname: String,
        category: String,
        email: String,
        subject: String,
        description: String
    }
);

module.exports = mongoose.model("Message", MessageSchema);