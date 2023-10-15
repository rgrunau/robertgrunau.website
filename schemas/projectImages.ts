import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectImages",
  title: "Project Images",
  type: "document",
  fields: [
    defineField({
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "projectImageAlt",
      title: "Project Image Alt",
      type: "string",
    }),
  ],
});
