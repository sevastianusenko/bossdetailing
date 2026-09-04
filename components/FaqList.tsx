import type { Faq } from "@/lib/faq";

/**
 * Native disclosure elements: keyboard and screen-reader behaviour comes
 * free, and the answers stay in the document for search engines.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="rank-sub max-w-[52ch] text-bone transition-colors group-hover:text-carmine-lt">
              {f.q}
            </h3>
            <span
              aria-hidden="true"
              className="relative mt-2 block h-3 w-3 shrink-0"
            >
              <span className="absolute top-1/2 left-0 block h-[1.5px] w-3 -translate-y-1/2 bg-carmine-lt" />
              <span className="absolute top-1/2 left-0 block h-[1.5px] w-3 -translate-y-1/2 rotate-90 bg-carmine-lt transition-transform duration-300 group-open:rotate-0" />
            </span>
          </summary>
          <div className="pb-6 pr-10">
            <p className="prose-body">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
