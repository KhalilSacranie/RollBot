const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({ 
    sheetID: { type: String, require: true, unique: true },
    link: { type: String, require: true, unique: true },
});

const model = mongoose.model('SheetModels', sheetSchema);
module.exports = model;
