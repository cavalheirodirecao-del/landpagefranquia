# Memória do projeto Cavalheiro Franquias

## Objetivo

Landing page para vender a oportunidade de abrir uma unidade Cavalheiro, captar leads qualificados e encaminhá-los ao CRM Datacrazy. A comunicação usa “franquia Cavalheiro” para facilitar o entendimento, mas explica que o modelo é uma concessão de uso da marca.

## Marca e oferta

- Cavalheiro: moda masculina adulta, público principal de 18 a 35 anos, tamanhos P a G3.
- Produção própria, peças exclusivas e fábrica da marca.
- Duas operações existentes: Maceió/AL em shopping e Palmares/PE em ponto próprio.
- Exclusividade territorial mediante aprovação da praça.
- Investimento inicial estimado: R$ 50 mil a R$ 70 mil.
- Referências comerciais: markup mínimo de 2,2x, margem de contribuição aproximada de 54,55%, potencial líquido estimado de cerca de 15% e faturamento médio projetado de R$ 35.200/mês. Esses números são referências, não garantias.
- O parceiro ideal participa regularmente da operação.
- A oferta inclui estoque inicial aproximado de 1.000 peças, implantação, orientação de marca, marketing, ideias de campanha e tráfego pago.

## Direção visual

- Editorial de moda, premium, jovem e urbano.
- Preto, branco/off-white, cinza quente e dourado discreto.
- Tipografia atual: DM Sans para textos e Playfair Display para títulos editoriais.
- Composição assimétrica, bastante respiro, linhas finas, detalhes de campanha e microinterações discretas.
- Seguir a linha do Instagram `@cavalheiro.oficial`: feito à mão, produção exclusiva, fábrica, bastidores, estamparia e inaugurações.
- Substituir os slots gráficos da primeira versão por fotos, logo e vídeos verticais reais da Cavalheiro quando os assets forem adicionados.

## Stack

- Next.js 16 com App Router e TypeScript.
- PostgreSQL hospedado no Neon, projeto `LANDPAGEfranquia`, branch `production`.
- Vercel para deploy.
- `pg` para conexão com o banco, usando `DATABASE_URL` pooled para a aplicação.
- `zod` para validação do formulário.
- `lucide-react` para ícones.

## Rotas e arquivos principais

- `/`: landing page pública.
- `/admin/login`: login do administrador.
- `/admin`: painel de leads protegido.
- `POST /api/leads`: valida e salva o lead no Neon; encaminha o payload ao Datacrazy quando o webhook estiver configurado.
- `GET /api/admin/leads`: lista leads autenticados.
- `POST /api/admin/login`: cria cookie HTTP-only do administrador.
- `src/app/page.tsx`: landing page.
- `src/components/LeadForm.tsx`: formulário e estados de envio/sucesso/erro.
- `src/lib/db.ts`: pool Neon e criação inicial de `franchise_leads`.
- `src/middleware.ts`: proteção de `/admin` e `/api/admin/leads`.

## Variáveis de ambiente

Nunca versionar valores reais. Configurar localmente em `.env.local` e na Vercel em **Settings → Environment Variables**:

```env
DATABASE_URL=URL pooled do Neon
ADMIN_PASSWORD=senha forte do painel
DATACRAZY_WEBHOOK_URL=URL privada do webhook Datacrazy
```

O arquivo `.env.local` está no `.gitignore`. Não salvar chaves de API no frontend.

## CRM Datacrazy

- Integração criada para a conexão `landypageFRANQUIA`.
- O endpoint envia nome, WhatsApp, e-mail, cidade, estado, faixa de investimento, experiência, disponibilidade de operação, `lead_id` e origem.
- A primeira mensagem do WhatsApp deve ser personalizada com nome e cidade e informar que a equipe analisará o perfil e a disponibilidade da praça.
- A implementação atual usa o webhook. Se o Datacrazy exigir uma API key em header, consultar a documentação do endpoint antes de adicionar autenticação; não adivinhar o header.

## Deploy atual

- GitHub: `https://github.com/cavalheirodirecao-del/landpagefranquia`
- Branch: `main`
- Commit inicial: `cb00061`
- Vercel: `https://landpagefranquia-ebon.vercel.app/`
- Deploy público verificado em 17/10/2026; landing page e formulário renderizam corretamente.

## Verificações feitas

- `npm run build` passa com sucesso.
- API administrativa retorna `401` sem cookie de autenticação.
- Landing page foi verificada no navegador local e no deploy público.
- O envio real de um lead ao Datacrazy ainda não foi executado para evitar criar um registro real sem uma confirmação explícita.

## Próximos passos

1. Adicionar `ADMIN_PASSWORD` e `DATACRAZY_WEBHOOK_URL` na Vercel e fazer redeploy.
2. Testar o login em `/admin/login`.
3. Enviar um lead real de teste e confirmar entrada no funil Datacrazy.
4. Inserir logo, fotos das lojas, fotos de produto e vídeos verticais reais.
5. Adicionar domínio próprio quando a campanha estiver validada.
