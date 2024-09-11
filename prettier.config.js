/** @type {import("prettier").Config} */
export default {
	tabWidth: 4,
	useTabs: true,
	singleQuote: true,
	trailingComma: "all",
	semi: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: [".*", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
	],
};
