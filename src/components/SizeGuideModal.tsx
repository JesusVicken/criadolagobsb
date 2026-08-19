"use client";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e1420] border border-[var(--border)] rounded-sm p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--lake-glow)]">
              Guia de Ajuste
            </span>
            <h3
              className="text-2xl text-white font-display uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Tabela de Medidas (cm)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#080c10] border border-[var(--border)] text-white/80 hover:text-white hover:border-[var(--lake-glow)] transition-colors"
            aria-label="Fechar guia de tamanhos"
          >
            ✕
          </button>
        </div>

        {/* Tip banner */}
        <div className="mb-6 p-3.5 bg-[var(--lake-blue)]/15 border border-[var(--lake-glow)]/30 rounded-sm text-xs text-[var(--cream)] leading-relaxed flex items-start gap-3">
          <span className="text-lg">💡</span>
          <p>
            <strong>Dica de Atleta:</strong> Nossas peças possuem modelagem ajustada para não embolar durante a remada. Caso prefira um caimento mais solto, recomendamos escolher um tamanho acima.
          </p>
        </div>

        {/* Table 1: Roupas (UV, Corta-Vento, Regatas, Blusas) */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--lake-glow)]" />
            Vestuário (Manga UV, Corta-Vento, Regatas)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[var(--cream)] border-collapse">
              <thead>
                <tr className="bg-[#080c10] text-[var(--lake-glow)] uppercase font-semibold text-[10px] tracking-wider border-b border-[var(--border)]">
                  <th className="py-3 px-3">Tamanho</th>
                  <th className="py-3 px-3">Tórax / Busto</th>
                  <th className="py-3 px-3">Cintura</th>
                  <th className="py-3 px-3">Comprimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">P</td>
                  <td className="py-3 px-3">86 - 92 cm</td>
                  <td className="py-3 px-3">70 - 76 cm</td>
                  <td className="py-3 px-3">65 cm</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">M</td>
                  <td className="py-3 px-3">93 - 99 cm</td>
                  <td className="py-3 px-3">77 - 83 cm</td>
                  <td className="py-3 px-3">68 cm</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">G</td>
                  <td className="py-3 px-3">100 - 108 cm</td>
                  <td className="py-3 px-3">84 - 92 cm</td>
                  <td className="py-3 px-3">71 cm</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">GG</td>
                  <td className="py-3 px-3">109 - 117 cm</td>
                  <td className="py-3 px-3">93 - 101 cm</td>
                  <td className="py-3 px-3">74 cm</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">XGG</td>
                  <td className="py-3 px-3">118 - 126 cm</td>
                  <td className="py-3 px-3">102 - 110 cm</td>
                  <td className="py-3 px-3">77 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Headwear (Bonés e Viseiras) */}
        <div>
          <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--lake-glow)]" />
            Bonés e Viseiras (Headwear)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[var(--cream)] border-collapse">
              <thead>
                <tr className="bg-[#080c10] text-[var(--lake-glow)] uppercase font-semibold text-[10px] tracking-wider border-b border-[var(--border)]">
                  <th className="py-3 px-3">Modelo</th>
                  <th className="py-3 px-3">Circunferência</th>
                  <th className="py-3 px-3">Regulagem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">Boné Trucker</td>
                  <td className="py-3 px-3">54 cm - 61 cm</td>
                  <td className="py-3 px-3">Fecho Snapback de pino duplo</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white">Viseira Performance</td>
                  <td className="py-3 px-3">52 cm - 60 cm</td>
                  <td className="py-3 px-3">Faixa de velcro ajustável</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary py-2.5 px-6 text-xs"
          >
            <span>Entendi, Fechar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
