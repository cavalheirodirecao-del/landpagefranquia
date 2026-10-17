import { NextResponse } from "next/server";
import { ensureLeadsTable, pool } from "@/lib/db";
export async function GET() { try { await ensureLeadsTable(); const result = await pool.query("SELECT * FROM franchise_leads ORDER BY created_at DESC LIMIT 200"); return NextResponse.json({ leads: result.rows }); } catch { return NextResponse.json({ error: "Banco indisponível" }, { status: 500 }); } }
