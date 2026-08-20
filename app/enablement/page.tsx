import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "AI Workshops and Curriculum | sleektiki.ai",
  description:
    "Workshops and internal curriculum so marketing, engineering, and production teams can run AI and Unreal workflows without a research group. Playbooks, critique, and working artifacts they keep.",
};

const facts = [
  ["50+", "working professionals trained"],
  ["NASA / Army", "Unreal workshops"],
  ["12 yrs", "college curriculum"],
];

const problems = [
  {
    title: "The tools arrived. The process did not.",
    body: "Copilot, image models, Unreal, an internal GPT. People poke at them. A few power users get lucky. Everyone else ships the old way and hopes the license renews itself.",
  },
  {
    title: "Marketing cannot risk a hallucinated pack.",
    body: "A generated still that redraws the logo is not a draft. It is a brand incident. Teams need a quality gate, not a mood board.",
  },
  {
    title: "L&D has slides. The floor needs a studio.",
    body: "A lunch-and-learn does not change Monday. People need a brief, a constraint, a critique, and a playbook they can run when the instructor is gone.",
  },
];

const modules = [
  {
    code: "01",
    title: "Product imagery that keeps the pack",
    who: "Marketing, brand, e-commerce, creative production",
    job: "Turn approved product photography into campaign and social stills without inventing silhouette, materials, logos, or color.",
    leave: "A repeatable stills workflow, a review checklist, and shots made from your SKUs.",
    from: "Pixelus",
    href: "/projects/pixelus",
  },
  {
    code: "02",
    title: "Generative AI judgment",
    who: "Any mixed room: marketing, product, legal-adjacent reviewers, producers",
    job: "Decide when generation helps, when it lies, and who is allowed to approve the output.",
    leave: "A critique rubric, failure cases from live tools, and a written rule set for your team.",
    from: "Stillion AI / Pixelus review gates",
    href: "/projects/stillion-lora",
  },
  {
    code: "03",
    title: "Unreal for working professionals",
    who: "Engineers, technical artists, visualization and simulation teams",
    job: "Get from a feature list to a scene someone else can operate: input, data, materials, inspect loop.",
    leave: "A working Unreal exercise on your stack, plus habits for versioning and handoff.",
    from: "Vertex / Epic UAI / NASA and Army training",
    href: "/projects/ue5-configurator",
  },
  {
    code: "04",
    title: "Inspectable agent workflows",
    who: "Ops, IT, power users, small production teams",
    job: "Put models on real files, mail, and tools without a black box. Traces on. Approval points where it matters.",
    leave: "A mapped workflow, what to automate, what to keep human, and how to read a tool trace.",
    from: "MAUDE",
    href: "/projects/maude",
  },
  {
    code: "05",
    title: "Train the trainer",
    who: "L&D, team leads, internal instructors",
    job: "Keep the program alive after the workshop week. Next cohort should not need me in the room.",
    leave: "Exercises, a critique structure, a playbook, and a plan for the next two sessions.",
    from: "Vertex curriculum / 12 years of studio teaching",
    href: "#how",
  },
];

const formats = [
  {
    title: "Discovery",
    time: "1 to 2 calls",
    body: "Your actual jobs, the tools you already pay for, who has to run them, and what a failure looks like. I do not show up with a generic deck.",
  },
  {
    title: "Workshop",
    time: "1 to 3 days",
    body: "Constrained exercises, then your briefs. Mixed technical levels in one room. Critique is part of the work, not a wrap-up slide.",
  },
  {
    title: "Internal curriculum",
    time: "multi-week",
    body: "A sequence L&D can own: modules, assignments, review checkpoints, portfolio-quality artifacts. Built the way I built a major and a professional training program.",
  },
  {
    title: "Leave-behind",
    time: "included",
    body: "Playbook, exercise files, critique rubric, and a short recorded demo if you want one. The point is Monday without me.",
  },
];

const how = [
  {
    n: "1",
    title: "Intake on the real work",
    body: "Send the SKU, the Unreal project, the current prompt dump, the failed stills. I design the room around that, not a vendor demo.",
  },
  {
    n: "2",
    title: "Teach the constraint first",
    body: "Small working systems before open briefs. If the pack cannot move, the pack cannot move. If the mesh swap has to survive a gamepad, we test it on a gamepad.",
  },
  {
    n: "3",
    title: "Critique like production",
    body: "What was the intended result. What evidence shows it worked. Who is the audience. What would make this safer for the next person.",
  },
  {
    n: "4",
    title: "Hand off a process",
    body: "Written steps, named owners, and artifacts the team already made. If it only works while I am driving, it failed.",
  },
];

const record = [
  {
    title: "Vertex School",
    detail:
      "Chief Administrative Officer, 2022 to 2024. Directed curriculum and professional training. Helped secure Unreal Authorized Training Center status. Taught Unreal, production workflows, and applied AI to working adults.",
  },
  {
    title: "NASA and U.S. Army engineers",
    detail:
      "Unreal Engine 5 training engagements on behalf of Epic Games. Mixed technical rooms. The job was fluency they could take back to simulation and production, not a conference talk.",
  },
  {
    title: "Unreal Authorized Instructor",
    detail:
      "Epic Games partner, 2022 to 2024. Written exam and a live teaching evaluation from introductory through advanced levels.",
  },
  {
    title: "College curriculum",
    detail:
      "Twelve-plus years full time. Miami University Associate Professor. Columbia College Chicago, tenure awarded. Co-developed a Games and Simulation major serving more than 200 students a year. GDC Education Summit, 2020: production-ready student work.",
  },
];

export default function EnablementPage() {
  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] pb-20 pt-64 md:pt-72">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Workshops and curriculum
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Your team already has the tools. They do not have a class they can finish.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
            I design workshops and internal curriculum so marketing, engineering,
            and production people can run AI and Unreal workflows on Monday.
            Playbook, critique, working artifacts. Not another license.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#curriculum" className="btn">
              See the curriculum
            </Link>
            <Link href="#contact" className="btn-secondary">
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {facts.map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6"
            >
              <strong className="font-[family-name:var(--font-geist-mono)] text-2xl text-[var(--accent)]">
                {value}
              </strong>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            The gap
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            This is the conversation I keep walking into.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problems.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "1.75rem" }}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
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

      <section
        id="curriculum"
        className="scroll-mt-24 border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Curriculum
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Five modules. Pick the jobs your team actually has.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Each module is a workshop block that can stand alone or stack into
            an internal course. Built from work I already ship and already
            teach. Your files, your tools, your failure modes.
          </p>
          <div className="mt-12 grid gap-4">
            {modules.map((mod) => (
              <article
                key={mod.code}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "1.75rem" }}
              >
                <div className="grid gap-6 lg:grid-cols-[7rem_1fr_16rem] lg:items-start">
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                    {mod.code}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold">{mod.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {mod.who}
                    </p>
                    <p
                      className="mt-4 text-sm text-[var(--text-secondary)]"
                      style={{ lineHeight: 1.7 }}
                    >
                      {mod.job}
                    </p>
                    <p
                      className="mt-3 text-sm text-[var(--text-primary)]"
                      style={{ lineHeight: 1.7 }}
                    >
                      They leave with: {mod.leave}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    Built from{" "}
                    <Link
                      href={mod.href}
                      className="text-[var(--accent)] hover:underline"
                    >
                      {mod.from}
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Formats
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            A class, not a vendor demo.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {formats.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "1.75rem" }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                    {item.time}
                  </p>
                </div>
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

      <section
        id="how"
        className="scroll-mt-24 border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            How a room runs
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Intake, constraint, critique, handoff.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {how.map((step) => (
              <article
                key={step.n}
                className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]"
                style={{ padding: "1.75rem" }}
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                  {step.n}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p
                  className="mt-3 text-sm text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.7 }}
                >
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Record
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            I have already taught this kind of room.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {record.map((item) => (
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
                  {item.detail}
                </p>
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
            If this is the gap on your team, write.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Tell me who has to run the tools, what they have already tried, and
            what a good week would look like after the workshop. Email matt at
            sleektiki dot ai.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:matt@sleektiki.ai" className="btn">
              Email Matthew
            </a>
            <Link href="/" className="btn-secondary">
              See the work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
