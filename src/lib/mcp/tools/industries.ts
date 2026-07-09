import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_industries",
  title: "List industries served",
  description: "Return the industries POTLAKA.COM serves as a last-mile delivery partner.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const industries = [
      "Retail & FMCG",
      "Distribution & wholesale",
      "Manufacturing",
      "E-commerce",
      "Pharmaceutical & healthcare",
      "Financial & professional services",
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(industries, null, 2) }],
      structuredContent: { industries },
    };
  },
});
