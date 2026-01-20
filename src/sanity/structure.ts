import type { StructureResolver } from "sanity/structure";

import {
	filteredDocumentListItems,
	singletonDocumentListItems,
} from "sanity-plugin-singleton-management";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
	S.list()
		.title("Crown Wellness Content")
		.items([
			// Create a list item for each singleton document in your schema that links directly to a document view
			...singletonDocumentListItems({ S, context }),
			// Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
			...filteredDocumentListItems({ S, context }),
		]);
