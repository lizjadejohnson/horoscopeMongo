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
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle">Sign In</a>
                                <ul className="dropdown-menu">
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
                                </ul>
                            </li>
                            <li><a href="/signup">Sign Up</a></li>
                            <li className="dropdown">
                                <a href="/horoscope" className="dropdown-toggle">Horoscopes</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/Horoscope1">Horoscope 1</a></li>
                                    <li><a href="/Horoscope2">Horoscope 2</a></li>
                                    <li><a href="/Horoscope3">Horoscope 3</a></li>
                                </ul>
                            </li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                    {!props.isIndexPage && <div className='heading-bar'>
                        <h1>{props.title}</h1>
                    </div>}
                </header>
                <div className="container">
                    {props.children}
                </div>
            </body>
        </html>
    );
}

module.exports = Layout;
