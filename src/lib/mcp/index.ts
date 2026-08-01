import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listLeadershipTool from "./tools/list-leadership";
import listProjectsTool from "./tools/list-projects";
import listAwardsTool from "./tools/list-awards";

export default defineMcp({
  name: "dreamy-backgrounds",
  title: "Dreamy Backgrounds",
  version: "0.1.0",
  instructions:
    "Read-only tools over Vanshika Singla's public portfolio. Use `get_profile` for her bio, headline metrics, and contact links; `list_experience` for professional work history; `list_leadership` for board and philanthropic roles; `list_projects` (optionally filtered by keyword) for engineering and data projects; and `list_awards` for honours and scholarships. All data is the same public information published on her portfolio site.",
  tools: [
    getProfileTool,
    listExperienceTool,
    listLeadershipTool,
    listProjectsTool,
    listAwardsTool,
  ],
});
