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
                    <h1>{props.title}</h1>
                </header>
                <div className="container">
                    {props.children}
                </div>
            </body>
        </html>
    );
}

module.exports = Layout;