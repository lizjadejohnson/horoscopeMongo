const React = require('react');
const Layout = require('./Layout');

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <div className="auth-forms">
          <div className="form-container">
            <h2>Sign Up</h2>
            <form action="/signup" method="POST">
              <input type="text" name="username" placeholder="Username" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="date" name="dob" placeholder="Date of Birth" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
