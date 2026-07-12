import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_details",
  title: "Get contact details",
  description:
    "Return POTLAKA.COM head office address, phone, email, and WhatsApp number for enterprise enquiries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      phone: "+27 11 383 2537",
      email: "ops@potlaka.com",
      whatsapp: "+27 79 025 8048",
      whatsappLink: "https://wa.me/27790258048",
      serviceArea: "Johannesburg and Ekurhuleni (Gauteng), South Africa",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
