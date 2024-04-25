const ZodiacSign = require('../models/zodiacModel');

const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

exports.getHoroscope = async (req, res) => {
    const { dob } = req.body;
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
                dob: dob
            });
        } else {
            res.status(404).send('Zodiac sign not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
