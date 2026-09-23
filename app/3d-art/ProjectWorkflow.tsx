import type { ArtWorkflow } from "./artData";

export default function ProjectWorkflow({ workflow }: { workflow: ArtWorkflow }) {
  return (
    <section
      aria-labelledby="project-workflow-title"
      className="border-y border-[var(--surface-border)] py-8 mb-10"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)] mb-3">
        AI + Blender workflow
      </p>
      <h3
        id="project-workflow-title"
        className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-4"
      >
        {workflow.title}
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
        {workflow.introduction}
      </p>

      <ol className="list-none divide-y divide-[var(--surface-border)]">
        {workflow.stages.map((stage, index) => (
          <li key={stage.title}>
            <details className="group" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start gap-3 sm:gap-4 py-5 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="pt-0.5 text-sm font-[family-name:var(--font-geist-mono)] text-[var(--accent)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {stage.title}
                  </span>
                  <span className="block text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                    {stage.summary}
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 shrink-0 mt-0.5 text-[var(--accent)] transition-transform group-open:rotate-180"
                >
                  <path d="m5 7.5 5 5 5-5" />
                </svg>
              </summary>
              <div className="space-y-4 pb-6 sm:pl-9 text-[var(--text-secondary)] leading-relaxed">
                {stage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          </li>
        ))}
      </ol>

      <div className="border-l-2 border-[var(--accent)] pl-5 mt-6">
        <h4 className="font-semibold text-[var(--text-primary)] mb-2">
          What the workflow makes possible
        </h4>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {workflow.takeaway}
        </p>
      </div>
    </section>
  );
}
