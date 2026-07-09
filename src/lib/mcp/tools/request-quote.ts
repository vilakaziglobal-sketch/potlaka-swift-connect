import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "request_quote",
  title: "Request a delivery quote",
  description:
    "Generate an email link and WhatsApp link a prospective client can use to request a POTLAKA.COM delivery quote. This does not send anything — it returns links the caller/user can open.",
  inputSchema: {
    companyName: z.string().min(1).describe("Prospect's company name."),
    contactName: z.string().min(1).describe("Person requesting the quote."),
    industry: z.string().optional().describe("Industry or sector, if known."),
    pickupArea: z.string().optional().describe("Pickup area or suburb."),
    deliveryArea: z.string().optional().describe("Delivery area or suburb."),
    volume: z
      .string()
      .optional()
      .describe("Expected daily or weekly delivery volume (free text)."),
    notes: z.string().optional().describe("Any additional context."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (input) => {
    const lines = [
      `Company: ${input.companyName}`,
      `Contact: ${input.contactName}`,
      input.industry && `Industry: ${input.industry}`,
      input.pickupArea && `Pickup area: ${input.pickupArea}`,
      input.deliveryArea && `Delivery area: ${input.deliveryArea}`,
      input.volume && `Volume: ${input.volume}`,
      input.notes && `Notes: ${input.notes}`,
    ].filter(Boolean) as string[];
    const body = lines.join("\n");
    const subject = `Delivery quote request — ${input.companyName}`;
    const mailto = `mailto:ops@potlaka.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    const waText = `Hi POTLAKA.COM, I'd like to request a delivery quote.\n\n${body}`;
    const whatsapp = `https://wa.me/27790258048?text=${encodeURIComponent(waText)}`;
    const result = {
      summary: body,
      emailLink: mailto,
      whatsappLink: whatsapp,
      phone: "+27 11 383 2537",
    };
    return {
      content: [
        {
          type: "text",
          text:
            "Quote request prepared. Send via email or WhatsApp using the links below:\n\n" +
            `Email: ${mailto}\nWhatsApp: ${whatsapp}\nPhone: +27 11 383 2537\n\nSummary:\n${body}`,
        },
      ],
      structuredContent: result,
    };
  },
});
