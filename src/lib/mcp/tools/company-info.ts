import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Return company profile for POTLAKA.COM: trading name, founder, founding year, and positioning.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      tradingName: "POTLAKA.COM",
      founded: 2020,
      founder: "Sipho Vilakazi",
      role: "Founder & Managing Director",
      positioning:
        "South African technology company developing automation for transport, logistics and warehousing — and tech-driven last-mile logistics for retailers, distributors, banks and e-commerce.",
      website: "https://potlaka.com",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
