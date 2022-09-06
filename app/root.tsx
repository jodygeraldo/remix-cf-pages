import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import tailwindcssStylesUrl from '~/tailwind.css'

export function meta() {
  return {
    charset: 'utf-8',
    title: 'Remix Cloudflare Pages Template',
    viewport: 'width=device-width,initial-scale=1',
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: tailwindcssStylesUrl }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
