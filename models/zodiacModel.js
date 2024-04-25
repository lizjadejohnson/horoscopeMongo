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
//All this is not necessary, since we only need the user's DOB,
//everything else is dynamically generated or derived from pre-existing data/
//You might not need to store all the details in the database.

const ZodiacSign = mongoose.model('ZodiacSign', zodiacSignSchema);

module.exports = ZodiacSign;