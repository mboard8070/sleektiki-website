import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Introduction to AI for Business | sleektiki.ai",
  description:
    "A practical Introduction to AI for Business workshop. Managers, marketers, analysts, and ops teams learn what these tools can do, where they fail, and how to put them into real work with a review process.",
};

const who = [
  "Managers who need a clear picture before they set policy",
  "Marketing, ops, HR, finance, and customer teams that already have ChatGPT, Copilot, or an internal assistant",
  "People who are not engineers and do not need to become engineers",
  "L&D leads who want a class the floor can finish, then repeat",
];

const outline = [
  {
    code: "01",
    title: "What this is",
    time: "morning",
    points: [
      "Generative AI, automation, and analytics are different jobs. Most teams blur them.",
      "What a language model is doing when it writes, summarizes, or answers.",
      "What it cannot know: your unpublished numbers, your real policy, last week's customer unless you put that in.",
      "A short map of the tools businesses already pay for, without a vendor bake-off.",
    ],
  },
  {
    code: "02",
    title: "Doing real work with it",
    time: "late morning",
    points: [
      "Start from a brief, not a blank chat. Role, audience, constraints, source material.",
      "Iterate in public: first pass, what is wrong, what to feed it next.",
      "Hands-on with each person's actual work: email, agenda, report, brief, FAQ, job aid.",
      "When to start a new thread. When to paste a document. When to stop and do it yourself.",
    ],
  },
  {
    code: "03",
    title: "Where it helps, and where it fails",
    time: "afternoon",
    points: [
      "Good first uses: first drafts, meeting notes, rewriting for an audience, turning a long doc into a checklist.",
      "Bad first uses: legal advice, customer-facing numbers, anything that must be true and is not in the source.",
      "Hallucinations, confident wrong answers, and invented citations.",
      "Live failure cases. People should see a model get something wrong on purpose.",
    ],
  },
  {
    code: "04",
    title: "Risk, data, and who signs off",
    time: "afternoon",
    points: [
      "What not to paste: customer PII, unreleased financials, credentials, anything under NDA you have not cleared.",
      "Brand voice and claims. A polished paragraph can still be a problem.",
      "A simple review rule: human owns the send. The model does not.",
      "Draft a team rule of use you can actually enforce.",
    ],
  },
  {
    code: "05",
    title: "A week that looks different",
    time: "close",
    points: [
      "Each person leaves with three workflows they ran in the room, written down.",
      "A one-page personal playbook: tools, prompts they will reuse, review steps.",
      "A team version: what we will try for 30 days, what we will not, who checks the work.",
      "How to tell if it is saving time, not just producing more text.",
    ],
  },
];

const formats = [
  {
    title: "Half day",
    body: "Orientation plus one hands-on block. For a leadership group that needs shared language before they buy more tools or write a policy.",
  },
  {
    title: "Full day",
    body: "The full outline. Mixed room. Their files, not stock examples. This is the default.",
  },
  {
    title: "Two days",
    body: "Day one as above. Day two is their work: bring live briefs, run them, critique, rewrite the playbook with what broke.",
  },
];

const leave = [
  "A written personal playbook",
  "Three workflows they already ran on their own work",
  "A draft team rule of use",
  "A 30-day try list with owners",
];

export default function EnablementPage() {
  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] pb-20 pt-64 md:pt-72">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            AI enablement
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Introduction to AI for Business
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
            A practical class for people who have to use these tools at work.
            What they are, what they invent, and how to put them into a real
            week with a human still on the send button.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#outline" className="btn">
              Course outline
            </Link>
            <Link href="#contact" className="btn-secondary">
              Ask about a session
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Who it is for
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Working adults. Not a computer science course.
          </h2>
          <ul className="mt-10 max-w-3xl space-y-4">
            {who.map((item) => (
              <li
                key={item}
                className="border-l-2 border-[var(--accent)] pl-5 text-base leading-7 text-[var(--text-secondary)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="outline"
        className="scroll-mt-24 border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Outline
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Five blocks. One working day.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Bring the tools you already have and the work sitting on your
            desk. The class uses that. It does not demo a stack you would have
            to buy.
          </p>
          <div className="mt-12 grid gap-4">
            {outline.map((block) => (
              <article
                key={block.code}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "1.75rem" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                    {block.code}
                  </p>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {block.time}
                  </p>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{block.title}</h3>
                <ul className="mt-4 space-y-2">
                  {block.points.map((point) => (
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

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Format
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Half day, full day, or two days on live work.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {formats.map((item) => (
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
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            They leave with
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Paper they can use on Monday.
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {leave.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-base text-[var(--text-secondary)]"
                style={{ padding: "1.5rem", lineHeight: 1.7 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 px-[max(1.5rem,5vw)] py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Next
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            If your team needs this class, write.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Say who would be in the room, which tools they already have, and
            whether you want a half day, a full day, or two. Email matt at
            sleektiki dot ai.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:matt@sleektiki.ai" className="btn">
              Email Matthew
            </a>
            <Link href="/" className="btn-secondary">
              Back to the site
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
