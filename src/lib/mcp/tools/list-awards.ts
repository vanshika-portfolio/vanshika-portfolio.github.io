import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { awards } from "@/data/portfolio";

export default defineTool({
  name: "list_awards",
  title: "List awards & honours",
  description: "List Vanshika Singla's awards, scholarships, and competition placements.",
  inputSchema: {},
  outputSchema: { awards: z.array(z.string()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(awards, null, 2) }],
    structuredContent: { awards },
  }),
});
