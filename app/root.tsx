import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import GlobalStyle from '~/styles/global.css';

export const links = () => [{ rel: "stylesheet", href: GlobalStyle }]
export const meta = () => {
  const description = 'Blog Build with remix';
  const Keywords = 'Javascript';
  return {
    description,
    Keywords
  }
}

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
        <Meta />
        <Links />
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