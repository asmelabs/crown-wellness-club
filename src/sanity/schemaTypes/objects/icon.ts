// LUCIDE ICONS

import { defineType } from "sanity";
import { iconList } from "../helpers";

export const icon = defineType({
  name: "icon",
  type: "string",
  options: {
    list: iconList,
    layout: "dropdown",
  },
});
