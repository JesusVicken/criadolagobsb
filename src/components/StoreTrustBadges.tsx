"use client";

const trustItems = [
  {
    icon: "⚡",
    title: "Entrega em Brasília & Brasil",
    desc: "Envios rápidos para todo o DF via courier e Sedex para todo o país.",
  },
  {
    icon: "💬",
    title: "Atendimento via WhatsApp",
    desc: "Fale direto com a equipe Cria do Lago para tirar dúvidas e escolher a numeração.",
  },
  {
    icon: "☀️",
    title: "Tecnologia UV50+",
    desc: "Tecidos esportivos certificados contra radiação solar em alta exposição.",
  },
  {
    icon: "🔄",
    title: "Garantia de Troca",
    desc: "Primeira troca simples e sem complicação em até 30 dias após o recebimento.",
  },
];

export default function StoreTrustBadges() {
  return (
    <section className="border-y border-[var(--border)] bg-[#0b0f17]/90 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-sm glass hover:border-[var(--lake-blue)]/50 transition-all duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--lake-blue)]/20 border border-[var(--lake-glow)]/30 flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
