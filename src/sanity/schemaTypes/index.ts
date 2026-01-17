import type { SchemaTypeDefinition } from "sanity";

import { documents } from "./documents";
import { objects } from "./objects";
import { singletons } from "./singletons";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [...objects, ...documents, ...singletons],
};
