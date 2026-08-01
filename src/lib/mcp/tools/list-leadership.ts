import { defineTool } from "@lovable.dev/mcp-js";
import { leadership } from "@/data/portfolio";

export default defineTool({
  name: "list_leadership",
  title: "List leadership & philanthropy",
  description:
    "List Vanshika Singla's board, nonprofit, and philanthropic roles, including responsibilities and focus areas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(leadership, null, 2) }],
    structuredContent: { leadership },
  }),
});
