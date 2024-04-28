const React = require('react');
const Layout = require('./Layout');

function Horoscope(props) {
    return (
        <Layout title={props.title} user={props.user}>
            {/* <h1>{props.title}</h1> */}
            <div className='form-container'>
                <form action="/horoscope" method="POST">
                    <label htmlFor="dob">Enter Your Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required />
                    <button type="submit">Get My Horoscope</button>
                </form>
                <p>To save: Login first or <a href="/signup" className="button">create a new account.</a></p>

            </div>
        </Layout>
    );
}

module.exports = Horoscope;