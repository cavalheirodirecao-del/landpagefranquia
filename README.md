# Cavalheiro Franquias

Landing page e painel inicial para captação de interessados na franquia Cavalheiro.

## Rodar localmente

```bash
npm run dev
```

Configure `DATABASE_URL` no `.env.local` (já gerado pelo Neon). Para enviar leads ao Datacrazy, adicione `DATACRAZY_WEBHOOK_URL` como variável privada.

Configure também `ADMIN_PASSWORD` para proteger `/admin`.

O endpoint `POST /api/leads` cria a tabela `franchise_leads` automaticamente na primeira submissão e, quando configurado, encaminha o mesmo payload ao webhook.
