import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/portfolio";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Vanshika Singla's public projects with descriptions, tech stacks, and links. Optionally filter by a keyword matched against title, description, and stack.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional keyword filter, e.g. 'python', 'hackathon', 'llm'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const matches = q
      ? projects.filter((p) =>
          [p.title, p.blurb, p.tag ?? "", p.stack.join(" ")]
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : projects;

    return {
      content: [{ type: "text" as const, text: JSON.stringify(matches, null, 2) }],
      structuredContent: { count: matches.length, projects: matches },
    };
  },
});
