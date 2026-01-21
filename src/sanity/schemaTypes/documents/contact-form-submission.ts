import { EnvelopeIcon } from "@sanity/icons";
import { format } from "date-fns";
import { defineField, defineType } from "sanity";

export const contactFormSubmission = defineType({
	name: "contactFormSubmission",
	title: "Contact Form Submission",
	type: "document",
	icon: EnvelopeIcon,
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			readOnly: true,
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			readOnly: true,
		}),
		defineField({
			name: "phone",
			title: "Phone",
			type: "string",
			readOnly: true,
		}),
		defineField({
			name: "message",
			title: "Message",
			type: "text",
			readOnly: true,
		}),
		defineField({
			name: "submittedAt",
			title: "Submitted At",
			type: "datetime",
			readOnly: true,
		}),
		defineField({
			name: "status",
			title: "Status",
			type: "string",
			options: {
				list: [
					{ title: "New", value: "new" },
					{ title: "Read", value: "read" },
					{ title: "Replied", value: "replied" },
					{ title: "Archived", value: "archived" },
				],
			},
			initialValue: "new",
		}),
		defineField({
			name: "notes",
			title: "Internal Notes",
			type: "text",
			description: "Notes for staff (not visible to customer)",
		}),
	],
	orderings: [
		{
			title: "Newest First",
			name: "submittedAtDesc",
			by: [{ field: "submittedAt", direction: "desc" }],
		},
	],
	preview: {
		select: {
			name: "name",
			email: "email",
			submittedAt: "submittedAt",
			status: "status",
		},
		prepare({ name, email, submittedAt }) {
			return {
				title: name,
				subtitle: `${email} • ${!submittedAt ? "No Date" : format(new Date(submittedAt), "dd.MM.yy, HH:mm")}`,
				media: EnvelopeIcon,
			};
		},
	},
});
