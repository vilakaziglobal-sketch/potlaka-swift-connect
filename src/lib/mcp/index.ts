import { defineMcp } from "@lovable.dev/mcp-js";
import companyInfoTool from "./tools/company-info";
import contactDetailsTool from "./tools/contact-details";
import servicesTool from "./tools/services";
import industriesTool from "./tools/industries";
import requestQuoteTool from "./tools/request-quote";

export default defineMcp({
  name: "potlaka-mcp",
  title: "POTLAKA.COM",
  version: "0.1.0",
  instructions:
    "Tools for POTLAKA.COM, a South African last-mile delivery company. Use these tools to answer questions about the company, its services and industries served, its head office and contact details, and to prepare a delivery quote request (returns email and WhatsApp links — nothing is sent automatically).",
  tools: [
    companyInfoTool,
    contactDetailsTool,
    servicesTool,
    industriesTool,
    requestQuoteTool,
  ],
});
