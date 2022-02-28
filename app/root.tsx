import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => ({ title: 'John Gamboa' });

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          margin: '0 !important',
          fontFamily: 'Gloria Hallelujah, sans-serif',
          fontSize: '20px',
          backgroundColor: '#fefefe',
        }}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
