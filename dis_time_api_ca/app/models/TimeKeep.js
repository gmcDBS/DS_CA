var mongoose = require('mongoose');
var TimeKeepSchema = new mongoose.Schema({
    userId: String,
    workDate: String,
    workHours: String,
    createDate: Date
});
mongoose.model('TimeKeep', TimeKeepSchema);
module.exports = mongoose.model('TimeKeep');
