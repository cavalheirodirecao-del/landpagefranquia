import { Pool } from "pg";

const globalForDb = globalThis as unknown as { pool?: Pool };
export const pool = globalForDb.pool ?? new Pool({ connectionString: process.env.DATABASE_URL, max: 3, idleTimeoutMillis: 10000, connectionTimeoutMillis: 5000 });
if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;

export async function ensureLeadsTable() {
  await pool.query(`CREATE TABLE IF NOT EXISTS franchise_leads (
    id BIGSERIAL PRIMARY KEY, name TEXT NOT NULL, whatsapp TEXT NOT NULL, email TEXT NOT NULL,
    city TEXT NOT NULL, state TEXT NOT NULL, investment_range TEXT NOT NULL, experience TEXT,
    operation_availability TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'novo', source TEXT DEFAULT 'site',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
}
