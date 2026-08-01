import { defineTool } from "@lovable.dev/mcp-js";
import { profile, metrics } from "@/data/portfolio";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Vanshika Singla's public profile: name, role, location, summary, headline metrics, and public contact/social links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { profile, metrics };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
