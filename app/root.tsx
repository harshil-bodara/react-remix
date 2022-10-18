import { Outlet, LiveReload, Link } from "@remix-run/react";

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }: any) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : 'Remix-Blog'}</title>
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: any) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">Remix</Link>
      </nav>
      <ul className="nav">
        <li>
          <Link to="posts">Posts</Link>
        </li>
      </ul>
      <div className="container">
        {children}
      </div>
    </>
  )
}