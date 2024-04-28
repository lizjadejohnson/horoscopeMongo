const React = require('react');

function Layout(props) {
    console.log('Layout props:', props);  // This should include the user prop if passed correctly
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
                            {props.user ? (
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle">Account</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/edit-profile">User: {props.user.username}<br />Edit Profile</a></li>
                                        <li><a href="/logout">Logout</a></li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle">User</a>
                                    <ul className="dropdown-menu" id='login-dropdown'>
                                        <div className="auth-forms">
                                            <div className="login-container">
                                                <h2 className='login-head'>Login</h2>
                                                <form action="/login" method="POST">
                                                    <input type="text" name="username" placeholder="Username" required />
                                                    <input type="password" name="password" placeholder="Password" required />
                                                    <button type="submit">Log In</button>
                                                    <a id="create-button" href="/signup">Create New Account</a>
                                                </form>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            )}
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