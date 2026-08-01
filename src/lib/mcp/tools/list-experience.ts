import { defineTool } from "@lovable.dev/mcp-js";
import { roles } from "@/data/portfolio";

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "List Vanshika Singla's professional work history — organisation, title, period, highlights, and tech stack for each role.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(roles, null, 2) }],
    structuredContent: { roles },
  }),
});
