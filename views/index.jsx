const React = require('react');
const Layout = require('./Layout');

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title} user={this.props.user} isIndexPage={true}>
        <section className="hero">
          <img src="/img/hero-img.jpg" alt="Fortune Teller Cover" className="hero-img"/>
          <div className="hero-text">
            <h1>Welcome to Fortune Teller</h1>
            <p>Discover and document your magical journey.</p>
          </div>
        </section>
      </Layout>
    );
  }
}

module.exports = Index;