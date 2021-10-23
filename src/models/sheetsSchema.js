const mongoose = require("mongoose");

const sheetsSchema = new mongoose.Schema({
    sheetID: { type: String, require: true, unique: true },
    link: { type: String, require: true },
});

const model = mongoose.model("SheetsModels", sheetsSchema);

module.exports = model;
