import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_industries",
  title: "List industries served",
  description: "Return the industries POTLAKA.COM serves with automation and tech-driven last-mile logistics.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const industries = [
      "Retail",
      "E-commerce",
      "Distributors",
      "Banks & financial services",
      "Warehousing & 3PL",
      "Manufacturing",
      "FMCG",
      "Pharmaceutical & healthcare",
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(industries, null, 2) }],
      structuredContent: { industries },
    };
  },
});
