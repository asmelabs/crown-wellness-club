import { EnvelopeIcon } from "@sanity/icons";
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

			// Custom Contact Form Submissions with filters
			S.listItem()
				.title("Contact Form Submissions")
				.icon(EnvelopeIcon)
				.child(
					S.list()
						.title("Contact Form Submissions")
						.items([
							// All submissions
							S.listItem()
								.title("All Submissions")
								.icon(EnvelopeIcon)
								.child(
									S.documentList()
										.title("All Submissions")
										.filter('_type == "contactFormSubmission"')
										.defaultOrdering([
											{ field: "submittedAt", direction: "desc" },
										]),
								),

							S.divider(),

							// New
							S.listItem()
								.title("🔵 New")
								.child(
									S.documentList()
										.title("New Submissions")
										.filter(
											'_type == "contactFormSubmission" && status == "new"',
										)
										.defaultOrdering([
											{ field: "submittedAt", direction: "desc" },
										]),
								),

							// Read
							S.listItem()
								.title("👁️ Read")
								.child(
									S.documentList()
										.title("Read Submissions")
										.filter(
											'_type == "contactFormSubmission" && status == "read"',
										)
										.defaultOrdering([
											{ field: "submittedAt", direction: "desc" },
										]),
								),

							// Replied
							S.listItem()
								.title("✅ Replied")
								.child(
									S.documentList()
										.title("Replied Submissions")
										.filter(
											'_type == "contactFormSubmission" && status == "replied"',
										)
										.defaultOrdering([
											{ field: "submittedAt", direction: "desc" },
										]),
								),

							// Archived
							S.listItem()
								.title("📦 Archived")
								.child(
									S.documentList()
										.title("Archived Submissions")
										.filter(
											'_type == "contactFormSubmission" && status == "archived"',
										)
										.defaultOrdering([
											{ field: "submittedAt", direction: "desc" },
										]),
								),
						]),
				),

			// Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
			...filteredDocumentListItems({ S, context }).filter(
				(item) => item.getId() !== "contactFormSubmission",
			),
		]);
