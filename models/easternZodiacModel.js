const mongoose = require('mongoose');

const easternZodiacSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    element: { type: String, required: true },
    years: [{ type: Number }],
    traits: [{ type: String }],
    compatibility: [{ type: String }]
});

const EasternZodiac = mongoose.model('EasternZodiac', easternZodiacSchema);

module.exports = EasternZodiac;
