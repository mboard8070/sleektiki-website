import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "AI Enablement | sleektiki.ai",
  description:
    "Matthew Board stands up AI and Unreal workflows, writes the playbook, and trains the people who have to run them. Vertex curriculum, NASA and U.S. Army engineers, and tools a non-specialist can repeat on Monday.",
};

const facts = [
  ["50+", "professionals trained"],
  ["12 yrs", "full-time faculty"],
  ["UAI", "Epic instructor"],
];

const loop = [
  {
    n: "01",
    title: "Name the job",
    body: "What has to ship, who has to run it, and what counts as a failure. A marketing still, a floor demo, a museum kiosk, and a LoRA for a painter are different jobs.",
  },
  {
    n: "02",
    title: "Make a toolchain they can hold",
    body: "Cutouts, quality gates, English-to-Unreal plugins, optional traces. The operator should not need a research group to get a usable result.",
  },
  {
    n: "03",
    title: "Write the playbook",
    body: "Constraints, review steps, and what to do when the model invents a logo or the mesh swap breaks the inspect loop. Judgment is the product.",
  },
  {
    n: "04",
    title: "Teach it, then leave proof",
    body: "Studio, workshop, or one-to-one. Students and engineers leave with a working artifact and a process they can run again without me in the room.",
  },
];

const cases = [
  {
    slug: "pixelus",
    title: "Pixelus",
    lane: "Product teams",
    image: "/images/projects/pixelus.png",
    body: "Campaign stills that keep the pack. The product pixels stay. Background, light, and contact shadows generate around a cutout. A quality gate refuses to invent the bottle. Built so a marketer does not have to learn a node graph.",
  },
  {
    slug: "stillion-lora",
    title: "Stillion AI",
    lane: "Non-technical collaborators",
    image: "/images/projects/stillion-lora.png",
    body: "A painter directed FLUX LoRA training without becoming an ML engineer: data, checkpoints, taste. The output went to a Contemporary Arts Center installation. Authorship stays with the person who can tell when it looks like their work.",
  },
  {
    slug: "ue5-configurator",
    title: "Unreal configurator",
    lane: "Teaching Unreal",
    image: "/images/projects/ue5-configurator-card.jpg",
    body: "A working reference for a student stuck on a trade-show production app: mesh swaps, material states, upgrade parts, mouse and gamepad inspect. Marketplace art so the lesson stayed on systems.",
  },
  {
    slug: "input-streamliner",
    title: "Input Streamliner",
    lane: "English to Unreal",
    image: "/images/projects/input-streamliner-output.jpg",
    body: "Describe controls in English. Get Enhanced Input for keyboard, pad, and touch. Local Ollama. The point is a technical artist who should not have to wire every mapping by hand.",
  },
  {
    slug: "tessera",
    title: "Tessera",
    lane: "Research without the stack",
    image: "/images/projects/tessera.png",
    body: "Literature review across academic databases for people who are not ML engineers. Search, summaries, citation views. The interface is the enablement.",
  },
  {
    slug: "maude",
    title: "MAUDE",
    lane: "Inspectable AI",
    image: "/images/projects/maude.png",
    body: "One gateway, many models, optional traces. Power users can see which tool ran. Casual users can ignore them. That split is how mixed rooms actually adopt a system.",
  },
];

const record = [
  {
    title: "Vertex School",
    detail:
      "Chief Administrative Officer, 2022 to 2024. Curriculum, operations, and Unreal Authorized Training Center status. Taught game development and real-time production. Unreal Engine 5 training for NASA and U.S. Army engineers on behalf of Epic Games.",
  },
  {
    title: "Unreal Authorized Instructor",
    detail:
      "Epic Games partner, 2022 to 2024. Written exam plus a live teaching evaluation from introductory through advanced levels. The credential is for teaching Unreal, not for a demo reel.",
  },
  {
    title: "College teaching",
    detail:
      "Twelve-plus years full time. Associate Professor of Emerging Technologies at Miami University. Assistant Professor of Game Design at Columbia College Chicago, tenure awarded. Co-developed a Games and Simulation major serving more than 200 students a year. GDC Education Summit, 2020: Five Steps Toward Production Ready Game Art Students.",
  },
  {
    title: "Labs and production",
    detail:
      "$255,000 in technology grants for a production lab and motion-capture equipment. NSF museum games that had to run on a kiosk in public. The classroom and the floor share the same test: does a stranger get a result.",
  },
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
            Stand up the workflow. Train the people who have to live in it.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
            I build AI and Unreal pipelines, then teach teams how to ship with
            them. The test is Monday: a marketer, an engineer, or a student
            can run the process without a research group in the room.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#cases" className="btn">
              See the cases
            </Link>
            <Link href="#record" className="btn-secondary">
              Teaching record
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
            Method
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            A production cycle, not a tool tour.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Tools move. The loop does not. This is the same cycle I used in
            Unreal workshops, in a games major, and in the AI products I ship
            now.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {loop.map((step) => (
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

      <section
        id="cases"
        className="scroll-mt-24 border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Cases
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Tools a non-specialist can actually run.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Each of these is a product or a teaching demo. The enablement
            claim is the same: someone else can operate it, judge the output,
            and ship.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {cases.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors"
              >
                <div className="h-52 overflow-hidden bg-[var(--surface-light)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    {item.lane}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm text-[var(--text-secondary)]"
                    style={{ lineHeight: 1.7 }}
                  >
                    {item.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="record"
        className="scroll-mt-24 border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Record
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Curriculum, workshops, and a lab that had to work.
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

      <section className="px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Roles in AI enablement, product visualization, and Unreal pipelines.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Email matt at sleektiki dot ai. I will relocate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="btn">
              Get in touch
            </Link>
            <Link href="/" className="btn-secondary">
              All work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
