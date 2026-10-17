import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CircleDot,
  MapPin,
  Shirt,
  Sparkles,
  Store,
  Target,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

const faqs = [
  [
    "A Cavalheiro cobra taxa de franquia?",
    "Não cobramos taxa de franquia. Nosso modelo prioriza uma relação de longo prazo, com parceiros que compram estoque de forma recorrente e constroem a marca junto com a Cavalheiro.",
  ],
  [
    "O que está incluído no investimento?",
    "O investimento inicial estimado fica entre R$ 50 mil e R$ 70 mil, considerando estoque inicial, reforma, placa, móveis, computador e estrutura básica da unidade.",
  ],
  [
    "Existe exclusividade na minha cidade?",
    "Sim. A Cavalheiro analisa a praça e, havendo aprovação, fecha a exclusividade territorial para aquela cidade.",
  ],
  [
    "Preciso trabalhar na operação?",
    "Buscamos parceiros que tenham presença regular na operação, diretamente ou com alguém de confiança acompanhando o dia a dia.",
  ],
  [
    "A Cavalheiro ajuda com marketing?",
    "Sim. O parceiro entra em um ecossistema de marca, ideias de campanha, conteúdo e tráfego pago para a praça.",
  ],
  [
    "Os resultados são garantidos?",
    "Não. Os indicadores apresentados são referências baseadas na operação e devem ser avaliados em conjunto com a praça, custos e execução do parceiro.",
  ],
];

export default function Home() {
  return (
    <main id="inicio" className="overflow-hidden">
      <nav className="fixed left-1/2 top-5 z-20 flex w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 items-center justify-between border border-white/20 bg-[#171715]/95 px-5 py-3 text-[var(--paper)] shadow-xl shadow-black/10 backdrop-blur-xl md:px-7">
        <a href="#inicio" className="serif text-xl italic tracking-tight">
          Cavalheiro
        </a>
        <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[.16em] md:flex">
          <a href="#oportunidade" className="hover:text-[#d6b578]">
            A oportunidade
          </a>
          <a href="#modelo" className="hover:text-[#d6b578]">
            O modelo
          </a>
          <a href="#duvidas" className="hover:text-[#d6b578]">
            Dúvidas
          </a>
        </div>
        <a
          href="#conversa"
          className="focus-ring inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em]"
        >
          Falar com a equipe <ArrowUpRight size={15} />
        </a>
      </nav>
      <section className="hero-grid relative min-h-[100dvh] bg-[var(--paper)] px-5 pb-16 pt-36 md:px-12 md:pt-44">
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1fr_400px]">
          <div className="reveal">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-[var(--gold)]">
              <span className="h-px w-8 bg-[var(--gold)]" />
              Concessão de uso da marca
            </p>
            <h1 className="serif max-w-4xl text-[clamp(3.7rem,9vw,9.2rem)] leading-[.87] tracking-[-.055em]">
              Vista o próximo capítulo.
            </h1>
            <p className="mt-9 max-w-xl text-base leading-7 text-[#626057] md:text-lg">
              Abra uma unidade Cavalheiro na sua cidade e entre em um
              ecossistema de moda masculina, produto próprio e marketing que
              coloca a sua praça em movimento.
            </p>
            <a
              href="#conversa"
              className="focus-ring group mt-10 inline-flex items-center gap-4 bg-[var(--ink)] px-5 py-4 text-sm font-semibold text-[var(--paper)] transition-transform duration-500 hover:-translate-y-1"
            >
              <span>Quero abrir uma unidade</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--paper)] text-[var(--ink)] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
          <div className="reveal delay-1 flex flex-col justify-end">
            <div className="relative mb-8 aspect-[4/5] overflow-hidden bg-[#252521] shadow-2xl shadow-black/15">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_32%,rgba(185,145,75,.42)),linear-gradient(0deg,rgba(0,0,0,.82),transparent_55%)]" />
              <div className="absolute inset-x-6 bottom-6 text-[var(--paper)]">
                <p className="text-[10px] uppercase tracking-[.22em] text-[#d6b578]">
                  CAV / 001
                </p>
                <p className="serif mt-3 text-4xl leading-none">
                  Feito para
                  <br />
                  <i>marcar presença.</i>
                </p>
              </div>
              <div className="absolute right-5 top-5 h-12 w-12 rounded-full border border-white/40" />
            </div>
            <div className="flex items-center justify-between border-t border-[var(--line)] pt-4 text-xs uppercase tracking-[.18em] text-[#77736b]">
              <span>Moda masculina</span>
              <span>18 — 35</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-5 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-[#8d8b84] md:left-12">
          <ArrowDown size={15} /> Desça para conhecer
        </div>
      </section>
      <section
        id="oportunidade"
        className="bg-[var(--ink)] px-5 py-28 text-[var(--paper)] md:px-12 md:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[.22em] text-[#d6b578]">
              Não é só uma loja
            </p>
            <h2 className="serif max-w-lg text-5xl leading-[.98] tracking-[-.035em] md:text-7xl">
              É uma marca com lugar para você.
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <Value
              icon={<Store />}
              title="Praça protegida"
              text="Aprovada a cidade, a Cavalheiro não abre outra unidade no mesmo território."
            />
            <Value
              icon={<Shirt />}
              title="Produto próprio"
              text="Moda masculina adulta, do P ao G3, com criação e fabricação Cavalheiro."
            />
            <Value
              icon={<Target />}
              title="Marketing em movimento"
              text="Conteúdo, ideias e tráfego pago pensados para fazer a praça ser lembrada."
            />
            <Value
              icon={<Sparkles />}
              title="Operação validada"
              text="Duas unidades em funcionamento e uma marca que já conversa com o público."
            />
          </div>
        </div>
      </section>
      <section id="modelo" className="px-5 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-7 border-b border-[var(--line)] pb-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-[var(--gold)]">
                A conta começa aqui
              </p>
              <h2 className="serif max-w-2xl text-5xl leading-[.96] tracking-[-.035em] md:text-7xl">
                Um ponto de partida
                <br />
                <i>realista.</i>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#77736b]">
              Indicadores de referência. O estudo completo depende da praça, da
              operação e da conversa com a equipe Cavalheiro.
            </p>
          </div>
          <div className="grid border-b border-[var(--line)] md:grid-cols-3">
            <Stat number="R$ 50–70 mil" label="investimento inicial estimado" />
            <Stat number="2,2x" label="markup mínimo de referência" />
            <Stat
              number="R$ 35,2 mil"
              label="faturamento médio mensal projetado"
            />
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div className="grid grid-cols-2 gap-4">
              <VideoCard
                title="Palmares / PE"
                context="Ponto próprio"
                src="https://player.mediadelivery.net/play/782651/316485de-db0e-44cd-a6c4-c0bd46cb596d"
              />
              <VideoCard
                title="Maceió / AL"
                context="Shopping"
                src="https://player.mediadelivery.net/play/782651/6b307eeb-b90b-443d-8ec4-b8fee3e9de3c"
              />
            </div>
            <div>
              <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-[var(--gold)]">
                <CircleDot size={13} /> O que você recebe
              </p>
              <ul className="space-y-4 text-sm leading-6 text-[#656057]">
                <li className="flex gap-3">
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-[var(--gold)]"
                  />
                  Exclusividade territorial mediante aprovação da praça.
                </li>
                <li className="flex gap-3">
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-[var(--gold)]"
                  />
                  Estoque inicial aproximado de 1.000 peças.
                </li>
                <li className="flex gap-3">
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-[var(--gold)]"
                  />
                  Orientação de implantação, marca e campanhas.
                </li>
                <li className="flex gap-3">
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-[var(--gold)]"
                  />
                  Possibilidade de pagamento em cartão ou boleto.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--line)] bg-[#e8e3da] px-5 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-[var(--gold)]">
              Duas praças. Uma visão.
            </p>
            <h2 className="serif max-w-md text-5xl leading-[.96] tracking-[-.035em] md:text-6xl">
              Uma operação que aprende em público.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Case
              city="Maceió / AL"
              context="Shopping"
              text="Uma operação em uma praça de alto fluxo, com o desafio real de equilibrar faturamento e custo de ocupação."
            />
            <Case
              city="Palmares / PE"
              context="Ponto próprio"
              text="Uma franqueada presente, ponto próprio e um ecossistema de produtos que convive sem disputar a mesma venda."
            />
          </div>
        </div>
      </section>
      <section className="bg-[var(--ink)] px-5 py-28 text-[var(--paper)] md:px-12 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/20 pb-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-[#d6b578]">
                O jeito Cavalheiro de fazer
              </p>
              <h2 className="serif max-w-2xl text-5xl leading-[.96] md:text-7xl">
                Cinco razões para
                <br />
                <i>entrar nessa história.</i>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#aaa69c]">
              Uma unidade é o ponto de encontro entre produto, praça e presença.
            </p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-5">
            {[
              [
                "01",
                "Produto que tem assinatura",
                "Criação própria, produção exclusiva e uma grade que atende do P ao G3.",
              ],
              [
                "02",
                "Praça com proteção",
                "Aprovada a cidade, a exclusividade territorial evita competição interna.",
              ],
              [
                "03",
                "Marketing que acompanha",
                "Ideias de conteúdo e tráfego pago para transformar atenção em visita.",
              ],
              [
                "04",
                "Suporte próximo",
                "A implantação e a operação são construídas em conversa, não em manual distante.",
              ],
              [
                "05",
                "Presença que vende",
                "Buscamos quem queira estar perto da loja, do time e do cliente.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-white/20 py-6">
                <p className="text-xs text-[#d6b578]">{n}</p>
                <h3 className="mt-8 text-lg font-semibold">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-[#aaa69c]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  <section className="bg-[#d6cec1] px-5 py-20 md:px-12 md:py-28">
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[.7fr_1.3fr] md:items-center">
      <p className="serif text-4xl leading-none md:text-6xl">Sem taxa de franquia.</p>
      <p className="max-w-2xl text-sm leading-6 text-[#656057]">A Cavalheiro escolheu crescer com uma rede de parceiros e clientes recorrentes. Em vez de cobrar uma taxa de entrada, construímos uma relação de longo prazo baseada em produto, suporte e compras frequentes de estoque.</p>
    </div>
  </section>
  <section id="duvidas" className="px-5 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-[var(--gold)]">
            Antes da conversa
          </p>
          <h2 className="serif mb-14 text-5xl leading-none md:text-7xl">
            Perguntas honestas.
          </h2>
          <div>
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group border-t border-[var(--line)] py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                  <span>{question}</span>
                  <ArrowDown
                    className="transition-transform duration-500 group-open:rotate-180"
                    size={18}
                  />
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-6 text-[#656057]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section
        id="conversa"
        className="bg-[#ded7cc] px-5 py-28 md:px-12 md:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-[var(--gold)]">
              Sua praça pode ser a próxima
            </p>
            <h2 className="serif max-w-xl text-5xl leading-[.94] tracking-[-.035em] md:text-7xl">
              Vamos descobrir se a Cavalheiro cabe na sua cidade.
            </h2>
            <div className="mt-12 flex items-start gap-3 border-t border-[#bdb5a9] pt-5 text-sm leading-6 text-[#656057]">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>
                Atendemos interessados em todo o Brasil. A aprovação depende da
                análise da praça e da disponibilidade territorial.
              </span>
            </div>
          </div>
          <div className="bg-[var(--paper)] p-6 md:p-10">
            <LeadForm />
          </div>
        </div>
      </section>
      <footer className="flex flex-col justify-between gap-8 bg-[var(--ink)] px-5 py-12 text-[var(--paper)] md:flex-row md:items-end md:px-12">
        <div>
          <p className="serif text-4xl italic">Cavalheiro</p>
          <p className="mt-3 text-xs uppercase tracking-[.16em] text-[#8d8b84]">
            Feito à mão · Produção exclusiva · Envio nacional
          </p>
        </div>
        <div className="max-w-xs text-xs leading-5 text-[#8d8b84]">
          *Indicadores são referências e não representam garantia de faturamento
          ou rentabilidade. A concessão de uso da marca depende de análise e
          contrato específico.
        </div>
      </footer>
    </main>
  );
}
function Value({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/20 pt-5">
      <div className="mb-7 text-[#d6b578]">{icon}</div>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-6 text-[#a9a59c]">{text}</p>
    </div>
  );
}
function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="border-t border-[var(--line)] py-7 md:border-r md:px-7 md:first:pl-0">
      <p className="serif text-4xl leading-none md:text-5xl">{number}</p>
      <p className="mt-3 max-w-[180px] text-xs uppercase tracking-[.12em] text-[#77736b]">
        {label}
      </p>
    </div>
  );
}
function Case({
  city,
  context,
  text,
}: {
  city: string;
  context: string;
  text: string;
}) {
  return (
    <div className="border border-[#c9c1b5] bg-[var(--paper)] p-7">
      <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[.16em] text-[#77736b]">
        <span>{context}</span>
        <MapPin size={14} />
      </div>
      <p className="serif text-3xl leading-none">{city}</p>
      <p className="mt-5 text-sm leading-6 text-[#656057]">{text}</p>
    </div>
  );
}
function VideoCard({
  title,
  context,
  src,
}: {
  title: string;
  context: string;
  src: string;
}) {
  const playerSrc = `${src}?autoplay=true&muted=true&loop=true&preload=true`;
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden border border-[#c9c1b5] bg-[#171715] p-1">
        <iframe
          title={`Vídeo da unidade ${title}`}
          src={playerSrc}
          loading="lazy"
          className="aspect-[9/16] w-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-4">
        <p className="text-[10px] uppercase tracking-[.16em] text-[#77736b]">
          {context}
        </p>
        <p className="serif mt-1 text-2xl leading-none">{title}</p>
      </figcaption>
    </figure>
  );
}
