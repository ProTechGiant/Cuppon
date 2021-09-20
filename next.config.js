module.exports = {
	reactStrictMode: true,
	distDir: "build",

	images: {
		domains: ["https://res.cloudinary.com"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	api: {
		externalResolver: true,
	},
};
