const ZodiacSign = require('../models/zodiacModel');

const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

exports.getHoroscope = async (req, res) => {
    console.log("Session User:", req.session.user); // Check what's in the session user
    let dob = req.body.dob || (req.session.user ? req.session.user.dob : null); // Use DOB from session if available
    console.log("DOB from request or session:", dob); // See what DOB is being used
    if (!dob) {
        return res.status(400).send('Date of birth is required.');
    }

    const userDate = new Date(dob);

    try {
        const userMonthDay = (userDate.getMonth() + 1) * 100 + userDate.getDate();
        const signs = await ZodiacSign.find();
        const sign = signs.find(sign => {
            const startMonthDay = (new Date(sign.startDate).getMonth() + 1) * 100 + new Date(sign.startDate).getDate();
            const endMonthDay = (new Date(sign.endDate).getMonth() + 1) * 100 + new Date(sign.endDate).getDate();

            if (startMonthDay <= endMonthDay) {
                return userMonthDay >= startMonthDay && userMonthDay <= endMonthDay;
            } else {
                return userMonthDay >= startMonthDay || userMonthDay <= endMonthDay;
            }
        });

        if (sign) {
            res.render('HoroscopeResult', {
                sign: {
                    ...sign._doc,
                    startDate: formatDate(sign.startDate),
                    endDate: formatDate(sign.endDate)
                },
                dob: formatDate(dob), // Format DOB for display
                user: req.session.user  // Make sure to pass the user session
            });
        } else {
            res.status(404).send('Zodiac sign not found');
        }
    } catch (error) {
        console.error('Error retrieving horoscope:', error);
        res.status(500).send('An error occurred processing your horoscope');
    }
};
