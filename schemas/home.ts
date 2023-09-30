import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "page_title",
      title: "Page Title",
      type: "string",
    }),
    defineField({
      name: "page_headline",
      title: "Page Headline",
      type: "string",
    }),
    defineField({
      name: "page_sub_headline",
      title: "Page Sub Headline",
      type: "string",
    }),
    defineField({
      name: "page_image",
      title: "Page Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "page_description",
      title: "Page Description",
      type: "blockContent",
    }),
  ],
});
