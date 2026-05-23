const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3";

interface BrevoContact {
  email: string;
  attributes?: Record<string, string>;
  listIds?: number[];
  updateEnabled?: boolean;
}

export async function addBrevoContact(contact: BrevoContact): Promise<boolean> {
  if (!BREVO_API_KEY) {
    console.log("Brevo: No API key configured, skipping contact creation:", contact.email);
    return true;
  }

  const res = await fetch(`${BREVO_API_URL}/contacts`, {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: contact.email,
      attributes: contact.attributes || {},
      listIds: contact.listIds || [],
      updateEnabled: contact.updateEnabled ?? true,
    }),
  });

  if (res.ok || res.status === 204) {
    return true;
  }

  const data = await res.json().catch(() => ({}));
  // "duplicate_parameter" means contact already exists — that's fine
  if (data?.code === "duplicate_parameter") {
    return true;
  }

  console.error("Brevo API error:", res.status, data);
  return false;
}
