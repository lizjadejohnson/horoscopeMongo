const React = require('react');

function Layout(props) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles/styles.css" />
            </head>
            <body>
                <header>
                <nav className="navbar">
                    <span className='navbar-title'>Fortune Teller</span>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/about">About</a></li>
              </ul>
              </nav>
            { !props.isIndexPage && <div className='heading-bar'>
                <h1>{props.title}</h1>
            </div> }
                </header>
                <div className="container">
                    {props.children}
                </div>
            </body>
        </html>
    );
}

module.exports = Layout;