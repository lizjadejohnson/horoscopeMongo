const React = require('react');
const Layout = require('./Layout');

function Horoscope(props) {
    return (
        <Layout title={props.title}>
            {/* <h1>{props.title}</h1> */}
            <div className='form-container'>
                <form action="/horoscope" method="POST">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required />
                    <button type="submit">Get My Horoscope</button>
                </form>
            </div>
        </Layout>
    );
}

module.exports = Horoscope;