const React = require('react');
const Layout = require('./Layout');

function formatDate(date) {
    if (!date) return ''; // Handle empty date case

    const dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) return ''; // Handle invalid date case

    // Add one day to the date
    dateObject.setDate(dateObject.getDate() + 1);

    const options = { month: 'long', day: 'numeric' }; // Defines how to display the month and day
    return new Intl.DateTimeFormat('en-US', options).format(dateObject);
}


function HoroscopeResult({ sign, dob }) {
    if (!sign || !dob) {
        return <Layout title="Error">Missing horoscope data!</Layout>;
    }
    
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