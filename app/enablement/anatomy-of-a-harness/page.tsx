import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "The Anatomy of a Harness | sleektiki.ai",
  description:
    "What a harness is, why it is useful, what it does, and how to build one around a model so a named job can run more than once.",
};

const parts = [
  {
    code: "01",
    title: "The job",
    description:
      "One named task with a done state. Not a topic. Not a chat.",
    points: [
      "Write what the run is for: a weekly summary, a scene check, a first pass on a ticket, a material from a photo.",
      "Write what done looks like in a form you can check: a file, a table, a pass/fail, a length, a reader.",
    ],
  },
  {
    code: "02",
    title: "The brief",
    description:
      "The instructions that do not change every Tuesday. The model reads this before it sees today's source.",
    points: [
      "Say the task, the reader, the constraints, and what the model is not allowed to invent.",
      "Keep it a document you can version. Do not bury it in a thread you will lose.",
    ],
  },
  {
    code: "03",
    title: "Context",
    description:
      "What goes in the window this run: files, notes, schema, last output.",
    points: [
      "If a fact is not in the window, the model cannot use it. It will fill the gap with a fluent pattern.",
      "Assemble the source on purpose. Do not paste the whole drive and hope the right page surfaces.",
    ],
  },
  {
    code: "04",
    title: "Tools",
    description:
      "Named actions with schemas and limits. Search, read, write, query — not an open shell to the machine.",
    points: [
      "Each tool has a name, an input shape, and a permission. The model asks. The harness runs it or refuses.",
      "A tool you cannot inspect is a hole. Log the call, the arguments, and what came back.",
    ],
  },
  {
    code: "05",
    title: "The loop",
    description:
      "Observe, act, check, stop. The harness decides when the model may call a tool, when a person must look, and when the run is finished.",
    points: [
      "A single reply is not a loop. Work that uses tools needs a stop condition, not an open-ended chat.",
      "Budgets belong here: steps, tokens, time. A run that cannot stop is not a method.",
    ],
  },
  {
    code: "06",
    title: "The check",
    description:
      "How you tell whether the result is good enough: tests, diffs, a spec, a human checkpoint.",
    points: [
      "Score against the done state you wrote, not against whether the prose sounds confident.",
      "Keep a trail. If you cannot replay what the model saw and called, you cannot debug the next miss.",
    ],
  },
];

export default function AnatomyOfAHarnessPage() {
  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] pb-20 pt-64 md:pt-72">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            <Link href="/enablement" className="hover:underline">
              Enablement
            </Link>
            {"  ·  "}
            Working method
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            The Anatomy of a Harness
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
            The frame around a model. What it is, why chat is not a process,
            what the frame actually does, and how to build one.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Definition
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            What a harness is
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--text-secondary)]">
            <p>
              A model predicts the next piece of a pattern: the next word,
              pixel, or token. That is all it does. A harness is the working
              frame you put around that prediction so a named job can run
              more than once.
            </p>
            <p>
              The harness decides what the model can see, what it can call,
              when the loop stops, and how you tell whether the result is
              good enough. Chat is a conversation. A harness is a process.
              Without one, you have a box you type into. With one, you have
              a job you can point at Tuesday the way you pointed at Monday.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Why
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Why it is useful
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--text-secondary)]">
            <p>
              Work repeats. A good first draft in a chat window is not a
              method. The next person, or you next week, will not remember
              which files were pasted, which constraint was in the third
              message, or which revision actually moved the draft.
            </p>
            <p>
              A harness holds the brief, the tools, the checks, and the
              trail. It is useful because it takes the job out of whoever
              happened to be at the keyboard. You can inspect it, version
              it, and run it again without reconstructing the thread.
            </p>
            <p>
              Introduction to AI is how you sit a model on a live task for
              the first time. A harness is how that task stops depending on
              a lucky prompt.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Function
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            What it does
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Assembles the window",
                text: "Puts the brief and this run's source in front of the model. Nothing else.",
              },
              {
                title: "Exposes tools",
                text: "Named actions with schemas and limits. The model asks. The harness runs or refuses.",
              },
              {
                title: "Runs the loop",
                text: "Observe, act, check, stop. A budget on steps, tokens, and time so the run cannot wander.",
              },
              {
                title: "Keeps a trail",
                text: "What the model saw, what it called, what came back. Enough to replay or debug.",
              },
              {
                title: "Checks the result",
                text: "Against the done state you wrote: a test, a diff, a spec, a person at a checkpoint.",
              },
              {
                title: "Hands it back",
                text: "A file, a log, a pass/fail — not a paragraph you have to reconstruct from a chat.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "1.75rem" }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p
                  className="mt-3 text-sm text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Build
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            How one is built
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Six parts. Start with the job. Do not start with a framework.
            The first harness should be one task, one brief, one check,
            written so a teammate could follow it.
          </p>
          <div className="mt-12 grid gap-8">
            {parts.map((part) => (
              <article
                key={part.code}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "2rem" }}
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                  Part {part.code}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{part.title}</h3>
                <p
                  className="mt-3 max-w-3xl text-sm text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.7 }}
                >
                  {part.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {part.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-[var(--text-secondary)]"
                      style={{ lineHeight: 1.7 }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Next
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            If you want this as a room, write.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Introduction to AI if the room has not used a model at work yet.
            The Anatomy of a Harness if they already draft and need a
            process they can run again. Email matt at sleektiki dot ai.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:matt@sleektiki.ai" className="btn">
              Email Matthew
            </a>
            <Link
              href="/enablement/introduction-to-ai"
              className="btn-secondary"
            >
              Introduction to AI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
