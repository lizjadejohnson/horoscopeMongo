const React = require('react');
const Layout = require('./Layout');

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title} isIndexPage={true}>
        <section className="hero">
          <img src="/img/hero-img.jpg" alt="Fortune Teller Cover" className="hero-img"/>
          <div className="hero-text">
            <h1>Welcome to Fortune Teller</h1>
            <p>Discover and document your magical journey.</p>
          </div>
        </section>

        <div className="auth-forms">
          <div className="form-container">
            <h2>Login</h2>
            <form action="/login" method="POST">
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
