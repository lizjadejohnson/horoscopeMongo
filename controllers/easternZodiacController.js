const EasternZodiac = require('../models/easternZodiacModel');

const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

exports.getEasternZodiac = async (req, res) => {
    console.log("Session User:", req.session.user);
    let dob = req.body.dob || (req.session.user ? req.session.user.dob : null);
    console.log("DOB from request or session:", dob);
    
    if (!dob) {
        return res.status(400).send('Date of birth is required.');
    }

    const birthYear = new Date(dob).getFullYear();

    try {
        const sign = await EasternZodiac.findOne({ years: birthYear });
        
        if (sign) {
            res.render('EasternZodiacResult', {
                sign: sign,
                dob: formatDate(dob),  // Consistent date formatting
                user: req.session.user  // Ensuring user session is passed
            });
        } else {
            res.status(404).send('Eastern Zodiac sign not found for the provided year.');
        }
    } catch (error) {
        console.error('Error retrieving Eastern zodiac:', error);
        res.status(500).send('An error occurred processing your Eastern zodiac.');
    }
};
