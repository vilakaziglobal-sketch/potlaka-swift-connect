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
        name: "Same-day last-mile delivery",
        description:
          "Rapid same-day delivery across Johannesburg and Ekurhuleni for time-sensitive B2B consignments.",
      },
      {
        name: "Scheduled distribution routes",
        description:
          "Structured, recurring delivery routes for retailers, distributors and manufacturers.",
      },
      {
        name: "E-commerce fulfilment",
        description:
          "Reliable last-mile handover for online retailers, with electronic proof of delivery on every parcel.",
      },
      {
        name: "Dedicated fleet & driver programmes",
        description:
          "Branded vehicles and trained drivers dedicated to a single client's operation.",
      },
      {
        name: "Returns & reverse logistics",
        description:
          "Managed collection and returns handling integrated with the client's systems.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
