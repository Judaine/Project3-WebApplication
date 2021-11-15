const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    topic: {type: String, required: [true, 'cannot be empty'], minlength: 3, maxlength: 20},
    name: {type: String, required: [true, 'cannot be empty']},
    host_name: {type: String, required: [true, 'cannot be empty']},
    phone_number: {type: String, required: [true, 'cannot be empty'], match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,},
    email: {type: String, required: [true, 'cannot be empty']},
    start_time: {type: String, required: [true, 'cannot be empty']},
    end_time: {type: String, required: [true, 'cannot be empty']},
    details: {type: String, required: [true, 'cannot be empty']},
    image_url: {type: String, required: [true, 'cannot be empty']}
},
{timestamps: true}
);

module.exports = mongoose.model('Connection', connectionSchema);