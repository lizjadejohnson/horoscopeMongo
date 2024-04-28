const React = require('react');
const Layout = require('./Layout');

function Horoscope(props) {
    // Conditional rendering based on whether the user is logged in and the showDateInput flag
    const formContent = props.showDateInput ? (
        <React.Fragment>
            <label htmlFor="dob">Enter Your Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
            <button type="submit">Get My Horoscope</button>
        </React.Fragment>
    ) : (
        <button type="submit">Get My Horoscope</button>
    );

    return (
        <Layout title={props.title} user={props.user}>
            <div className='form-container'>
                <form action="/horoscope" method="POST">
                    {formContent}
                </form>
                {/* Conditionally display the link to sign up or login based on user status */}
                {!props.user && (
                    <p>To save: Login first or <a href="/signup" className="button">create a new account.</a></p>
                )}
            </div>
        </Layout>
    );
}

module.exports = Horoscope;
