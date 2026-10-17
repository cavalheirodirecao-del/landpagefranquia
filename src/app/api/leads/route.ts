import { NextResponse } from "next/server";
import { ensureLeadsTable, pool } from "@/lib/db";
import { leadSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const parsed = leadSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Confira os dados preenchidos." }, { status: 400 });
    const lead = parsed.data;
    await ensureLeadsTable();
    const result = await pool.query(`INSERT INTO franchise_leads (name, whatsapp, email, city, state, investment_range, experience, operation_availability) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`, [lead.name, lead.whatsapp, lead.email, lead.city, lead.state, lead.investmentRange, lead.experience, lead.operationAvailability]);
    const webhook = process.env.DATACRAZY_WEBHOOK_URL;
    let webhookSent = false;
    if (webhook) { const response = await fetch(webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...lead, lead_id: result.rows[0].id, source: "site-cavalheiro" }) }); webhookSent = response.ok; }
    return NextResponse.json({ ok: true, id: result.rows[0].id, webhookSent });
  } catch (error) { console.error("lead_submission_failed", error); return NextResponse.json({ error: "Não foi possível enviar agora. Tente novamente." }, { status: 500 }); }
}
