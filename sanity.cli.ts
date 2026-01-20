/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./src/sanity/env";

export default defineCliConfig({
	api: { projectId, dataset },
	typegen: {
		path: "./src/**/*.{ts,tsx,js,jsx}",
		schema: "./schema.json",
		generates: "./src/sanity/types.ts",
		overloadClientMethods: true,
		formatGeneratedCode: true,
	},
});
