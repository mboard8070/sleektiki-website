import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Introduction to AI | sleektiki.ai",
  description:
    "A single-day Introduction to AI workshop. Five objectives, five topics. How models work, the systems you already meet at work, how to brief them, how to revise the output, and one workflow you take back.",
};

const objectives = [
  {
    text: "Explain, in your own words, how a model produces an answer and why two runs of the same request can differ.",
    description:
      "A shared vocabulary for the rest of the day. People should be able to say what the system is doing without turning it into mysticism or a computer science lecture.",
  },
  {
    text: "Tell apart the AI systems you already sit next to at work: predictive models, generative models, and assistants that use tools.",
    description:
      "So AI stops meaning only the chat box. The room should be able to name which kind of system they are looking at in the software they already use.",
  },
  {
    text: "Put a real piece of your work in front of a model and get a usable first pass from a written brief.",
    description:
      "Practice, not a demo. Each person brings a task they already owe and aims the model at that job with a brief and source material.",
  },
  {
    text: "Revise that output the way you would edit a colleague: against the brief, then with a pointed second request.",
    description:
      "The draft is the starting point. The skill is reading it, marking it, and sending it back without throwing the thread away.",
  },
  {
    text: "Leave with one weekly workflow, written down, that you have already run twice in the room.",
    description:
      "One job they will still have next week, captured as a method, tested on a second example before they walk out.",
  },
];

const topics = [
  {
    code: "01",
    title: "How a model produces an answer",
    objective: "Objective 1",
    description:
      "A working picture of what sits under the chat box: trained weights, prediction, and variation. Enough to use the system. No programming.",
    subtopics: [
      {
        title: "What a model is",
        description:
          "The object itself, in ordinary language, so the rest of the day has one shared picture.",
        points: [
          "A model is a function trained on examples. It is not a filing cabinet of facts you can query by name.",
          "Given your input, it predicts the next piece of a pattern: the next word, pixel, or token that fits what came before.",
        ],
      },
      {
        title: "Training and use",
        description:
          "The difference between how the system was built and what happens when you press send.",
        points: [
          "Training is the expensive, mostly one-time pass over large datasets that sets the model's weights.",
          "Everyday use is inference: your request in, an output out, no new learning unless a separate system is built for that.",
        ],
      },
      {
        title: "Why two drafts differ",
        description:
          "Why the same request is not a lookup, and what that means when you compare outputs.",
        points: [
          "The system samples among likely next pieces. It is not looking up a single stored paragraph.",
          "A small change in the brief, the order of notes, or the length you asked for will pull a different pattern forward.",
        ],
      },
    ],
  },
  {
    code: "02",
    title: "The systems you already meet at work",
    objective: "Objective 2",
    description:
      "Three kinds of AI already in business software, named clearly, so people can tell which one they are looking at.",
    subtopics: [
      {
        title: "Predictive AI",
        description:
          "The quiet scoring and forecasting already running in tools people use every week.",
        points: [
          "Scores, forecasts, rankings, and labels: likely to renew, likely to need follow-up, likely demand next quarter.",
          "It is often already running inside a CRM, ERP, ad platform, or fraud tool, without a chat box.",
        ],
      },
      {
        title: "Generative AI",
        description:
          "Systems that draft new material from a request: text, images, code, slides.",
        points: [
          "Text, images, code, and slides drafted from a request. This is what most people mean when they say AI this year.",
          "It is a drafting partner. The quality of the draft tracks the quality of the brief and the source you attach.",
        ],
      },
      {
        title: "Assistants that use tools",
        description:
          "When a model can search, open a file, or take a step, not only write a paragraph.",
        points: [
          "A model that can search, open a file, or call a calculator is taking steps, not only writing a paragraph.",
          "Multi-step work needs a trail you can follow: what it looked up, what it used, what it wrote.",
        ],
      },
    ],
  },
  {
    code: "03",
    title: "Briefing a model on your work",
    objective: "Objective 3",
    description:
      "How to put a live task in front of a model so the first pass is aimed at the job, not at a generic topic.",
    subtopics: [
      {
        title: "The brief",
        description:
          "What you write before any source goes in: the task, the reader, the length, and what done looks like.",
        points: [
          "Name the task, the reader, the length, and the tone before you paste source material.",
          "Write what done looks like: a one-page brief for a VP, a 150-word customer reply, a three-bullet agenda.",
        ],
      },
      {
        title: "Context",
        description:
          "The material the model is allowed to use, and the limit of that window.",
        points: [
          "Give it the source it needs: notes, a product sheet, last week's email, the outline you already have.",
          "If a fact is not in the window, the model cannot use it. It will fill the gap with a fluent pattern instead.",
        ],
      },
      {
        title: "The first pass",
        description:
          "Getting a draft you can work with, including running the same brief twice.",
        points: [
          "Ask for a draft. Do not ask it to finish the job in one shot.",
          "Run the same brief twice and set the two drafts side by side before you edit either one.",
        ],
      },
    ],
  },
  {
    code: "04",
    title: "Revising the output",
    objective: "Objective 4",
    description:
      "Treating the model's draft like a colleague's: check the assignment, mark what to change, send it back.",
    subtopics: [
      {
        title: "Read against the assignment",
        description:
          "Whether the draft matches the brief, and whether the structure is doing the job.",
        points: [
          "Check whether the draft matches the brief you wrote, or a generic version of the topic.",
          "Read structure first: order, headings, what is missing. Then read sentences.",
        ],
      },
      {
        title: "Send a pointed revision",
        description:
          "How to ask for the next pass without starting over in a blank chat.",
        points: [
          "Mark the weak part in plain language: too long, wrong reader, skipped the constraint, buried the ask.",
          "Return the marked draft. Do not open a new blank chat and hope for a cleaner start.",
        ],
      },
      {
        title: "Keep the substance yours",
        description:
          "What stays from your material, and what you cut so the next pass stays aimed.",
        points: [
          "Names, figures, and claims come from your material. The model is there to phrase and arrange.",
          "If a line is useful, keep it. If a line is filler, cut it in the open so the next pass stays tight.",
        ],
      },
    ],
  },
  {
    code: "05",
    title: "One workflow you take back",
    objective: "Objective 5",
    description:
      "One weekly job, written as a method, run twice before people leave so it is a process they can repeat.",
    subtopics: [
      {
        title: "Pick the job",
        description:
          "A recurring task and a brief worth saving, not a one-off prompt.",
        points: [
          "Choose a task you already do at least weekly: agenda, summary, first draft, rewrite for a new audience.",
          "Write the reusable brief for that job, not a one-off prompt you will forget.",
        ],
      },
      {
        title: "Capture the method",
        description:
          "The brief, the source, and the revision notes that actually moved the draft, written so someone else could follow.",
        points: [
          "Save the brief, the source you attach, and the two revision notes that actually moved the draft.",
          "Name the output so a teammate could follow the same steps without you in the room.",
        ],
      },
      {
        title: "Run it a second time",
        description:
          "The same method on a new example, so it is tested in the room, not only described.",
        points: [
          "Repeat the same job on a second example before the day ends.",
          "Write down how long it took next to how you usually do that task, while the comparison is still honest.",
        ],
      },
    ],
  },
];

export default function EnablementPage() {
  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] pb-20 pt-64 md:pt-72">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Single-day workshop
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Introduction to AI
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
            How these systems work, how to brief them on your own material,
            and how to revise what comes back. One day. Five objectives.
            Your work on the table.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            The day
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            An introduction, then practice.
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--text-secondary)]">
            <p>
              Most people meet AI as a chat box. Underneath that box is a
              trained model predicting the next piece of a pattern. That is
              enough to start, and it is the right place to start. The morning
              builds that picture. The rest of the day puts a live piece of
              each person&apos;s work in front of a model and treats the
              output like a draft from a colleague.
            </p>
            <p>
              Bring the tools you already have and a task you actually owe
              this week. The room uses that. There is no software to install
              and no stack to buy.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Objectives
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            By the end of the day you will be able to:
          </h2>
          <ol className="mt-12 max-w-3xl space-y-8">
            {objectives.map((item, i) => (
              <li key={item.text} className="flex gap-5">
                <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[var(--accent)] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base leading-8 text-[var(--text-primary)]">
                    {item.text}
                  </p>
                  <p
                    className="mt-2 text-sm text-[var(--text-secondary)]"
                    style={{ lineHeight: 1.7 }}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Agenda
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Agenda
          </h2>
          <div className="mt-12 grid gap-8">
            {topics.map((topic) => (
              <article
                key={topic.code}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "2rem" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                    Topic {topic.code}
                  </p>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {topic.objective}
                  </p>
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{topic.title}</h3>
                <p
                  className="mt-3 max-w-3xl text-sm text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.7 }}
                >
                  {topic.description}
                </p>
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  {topic.subtopics.map((sub) => (
                    <div key={sub.title}>
                      <h4 className="text-sm font-semibold tracking-wide">
                        {sub.title}
                      </h4>
                      <p
                        className="mt-2 text-sm text-[var(--text-muted)]"
                        style={{ lineHeight: 1.7 }}
                      >
                        {sub.description}
                      </p>
                      <ul className="mt-3 space-y-3">
                        {sub.points.map((point) => (
                          <li
                            key={point}
                            className="text-sm text-[var(--text-secondary)]"
                            style={{ lineHeight: 1.7 }}
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
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
            If you want this day for your team, write.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Email matt at sleektiki dot ai. Say who would be in the room and
            which tools they already use.
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
