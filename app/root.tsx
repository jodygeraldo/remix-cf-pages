import type { LinksFunction, V2_MetaFunction } from "@remix-run/cloudflare"
import {
	isRouteErrorResponse,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from "@remix-run/react"
import tailwindStyleUrl from "~/tailwind.css"

export const meta: V2_MetaFunction = () => [
	{ charSet: "utf-8" },
	{ title: "Blade Idle" },
	{ name: " viewport", content: "width=device-width,initial-scale=1" },
]

export const links: LinksFunction = () => [
	{ rel: "preload", href: tailwindStyleUrl, as: "style" },
	{ rel: "stylesheet", href: tailwindStyleUrl },
]

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return (
				<Document>
					<p>404 ERROR</p>
				</Document>
			)
		}
	}

	return (
		<Document lang='en'>
			<p>CATCH ALL ERROR</p>
		</Document>
	)
}

function Document({
	lang = "en",
	children,
}: {
	lang?: string
	children: React.ReactNode
}) {
	return (
		<html lang={lang}>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
