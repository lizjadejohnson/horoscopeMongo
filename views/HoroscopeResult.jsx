const React = require('react');
const Layout = require('./Layout');

function formatDate(date) {
    const options = { month: 'long', day: 'numeric' }; // Defines how to display the month and day
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

function HoroscopeResult({ sign, dob }) {
    // Format start and end dates using the formatDate function
    const startDateFormatted = formatDate(sign.startDate);
    const endDateFormatted = formatDate(sign.endDate);

    //Make a path to where our gif is located:
    const gifPath = `/img/${sign.name.toLowerCase()}.gif`; //sign name has to be lowercase to match the file name


    return (
        <Layout title="Your Horoscope">
            <p>Sign: {sign.name}</p>
            <p>Date Range: {startDateFormatted} - {endDateFormatted}</p>
            <p>Element: {sign.element}</p>
            <p>Quality: {sign.quality}</p>
            <p>Ruling Planet: {sign.rulingPlanet}</p>
            <p>Traits: {sign.traits.join(', ')}</p>
            <p>Symbol: {sign.symbol}</p>
            <p>Compatibility: {sign.compatibility.join(', ')}</p>
            <img className="zodiacgif" src={gifPath} alt={`${sign.name} sign`} />
        </Layout>
    );
}

module.exports = HoroscopeResult;
