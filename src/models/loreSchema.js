const mongoose = require("mongoose");

const loreSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
    userName: { type: String, require: true },
    lore: { type: String, require: false },
    pfp: { type: String, require: true },
});

const model = mongoose.model("LoreModels", loreSchema);

module.exports = model;
