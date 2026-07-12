import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Return company profile for POTLAKA.COM (Vilakazi Global SA (Pty) Ltd): legal name, trading name, founder, founding year, and positioning.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      legalName: "Vilakazi Global SA (Pty) Ltd",
      tradingName: "POTLAKA.COM",
      founded: 2020,
      founder: "Sipho Vilakazi",
      role: "Founder & Managing Director",
      positioning:
        "South African technology company delivering high-tech automation for transport, logistics and warehousing — and tech-driven last-mile logistics engineered for retailers, distributors, banks and e-commerce leaders.",
      website: "https://potlaka.com",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
