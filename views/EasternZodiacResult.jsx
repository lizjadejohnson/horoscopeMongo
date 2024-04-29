const React = require('react');
const Layout = require('./Layout');

function formatDate(date) {
    if (!date) return ''; // Handle empty date case

    const dateObject = new Date(date);
    if (isNaN(dateObject.getTime())) return ''; // Handle invalid date case

    // Add one day to the date
    dateObject.setDate(dateObject.getDate() + 1);

    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // Defines how to display the month, day, and year
    return new Intl.DateTimeFormat('en-US', options).format(dateObject);
}

function EasternZodiacResult(props) {
    const { sign, dob, user } = props;

    if (!sign || !dob) {
        return <Layout title="Error" user={user}>Missing zodiac data!</Layout>;
    }

    const dobFormatted = formatDate(dob); // Format the date of birth for display
    const years = sign.years.join(', '); // Join all years associated with the sign

    const gifPath = `/img/${sign.name.toLowerCase()}.gif`; // Ensure sign name is lowercase to match the file name


    return (
        <Layout title="Your Eastern Horoscope" user={user}>
            <h1>The {sign.name}</h1>
            <p><strong>Born On:</strong> {dobFormatted}</p>
            <p><strong>Years:</strong> {years}</p>
            <p><strong>Element:</strong> {sign.element}</p>
            <p><strong>Traits:</strong> {sign.traits.join(', ')}</p>
            <p><strong>Compatibility:</strong> {sign.compatibility.join(', ')}</p>
            <img className="zodiacgif" src={gifPath} alt={`${sign.name} sign`} />
        </Layout>
    );
}

module.exports = EasternZodiacResult;
