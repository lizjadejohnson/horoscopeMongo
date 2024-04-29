const React = require('react');
const Layout = require('./Layout');

class EditProfile extends React.Component {
    render() {
        return (
            <Layout title="Edit Profile" user={this.props.user}>
                <div className='form-container'>
                    <form action="/update-profile" method="POST">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.props.user.username}
                            required
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.props.user.email}
                            required
                        />
                        <label htmlFor="password">New Password (leave blank to keep the same):</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                        />
                        <label htmlFor="dob">Date of Birth (leave blank to keep the same):</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={this.props.user.dob}
                        />
                        <button type="submit">Update Profile</button>
                    </form>
                    {/* Conditionally display the link to login if the user is not logged in */}
                    {!this.props.user && (
                        <p>To edit your profile: <a href="/login" className="button">Login</a></p>
                    )}
                </div>
            </Layout>
        );
    }
}

module.exports = EditProfile;
