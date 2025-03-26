import { defineField, defineType } from "sanity";

export default defineType({
    name: "Services",
    title: "Services",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().min(5).max(100),
        }),
        defineField({ name: 'description', title: 'description', type: 'text' }),
        
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
        }),
    ],
});