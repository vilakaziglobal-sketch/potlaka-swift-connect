import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the last-mile delivery services POTLAKA.COM offers to enterprise clients, with short descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      {
        name: "Tech-driven last-mile delivery",
        description:
          "Automated dispatch, live tracking and electronic proof of delivery on each consignment.",
      },
      {
        name: "Scheduled distribution routes",
        description:
          "Structured, recurring delivery routes designed around your commercial calendar.",
      },
      {
        name: "Dedicated fleet & driver programmes",
        description:
          "Branded vehicles and trained drivers dedicated to a single client's operation.",
      },
      {
        name: "On-demand & overflow capacity",
        description:
          "Extra vehicles and drivers when volumes spike, to help maintain service levels.",
      },
      {
        name: "Reverse logistics & collections",
        description:
          "Managed collections and returns handling integrated with the client's systems.",
      },
      {
        name: "White-label delivery experience",
        description:
          "Your brand, your uniform, your customer experience — powered by the POTLAKA operational engine.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
