/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	devServerBroadcastDelay: 1000,
	ignoredRouteFiles: ["**/.*"],
	server: "./server.js",
	serverBuildPath: "functions/[[path]].js",
	serverConditions: ["worker"],
	serverDependenciesToBundle: "all",
	serverMainFields: ["browser", "module", "main"],
	serverMinify: true,
	serverModuleFormat: "esm",
	serverPlatform: "neutral",
	future: {
		unstable_postcss: true,
		unstable_tailwind: true,
		v2_errorBoundary: true,
		v2_meta: true,
		v2_routeConvention: true,
	},
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
}
