const mongoose = require("mongoose")
const zodiacSignSchema = new mongoose.Schema({
    "name": String,
    "startDate": Date,
    "endDate": Date,
    "element": String,
    "quality": String,
    "rulingPlanet": String,
    "symbol": String,
    "traits": [String],
    "compatibility": [String]
})

const ZodiacSign = mongoose.model('ZodiacSign', zodiacSignSchema);

module.exports = ZodiacSign;