import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectTitle",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainImageAlt",
      title: "Main Image Alt",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "projectUrl",
      title: "Project URL",
      type: "string",
    }),
    defineField({
      name: "projectRepo",
      title: "Project Repo",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "projectImages",
      title: "Project Images",
      type: "array",
      of: [{ type: "reference", to: { type: "projectImages" } }],
    }),
  ],
});
