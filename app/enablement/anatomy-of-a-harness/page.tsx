import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "The Anatomy of a Harness | sleektiki.ai",
  description:
    "What a harness is, why it is useful, what it does, and how to build one. MAUDE is the working example: a model, tools, a loop, a log, and a stop condition.",
};

const parts = [
  {
    code: "01",
    title: "Name the job",
    description:
      "One task with a finished state you can check. Not a topic. Not a chat.",
    maude:
      "In MAUDE this is a request that can actually finish: triage today's mail, open a pull request, write a weekly summary from notes on disk. If you cannot say what file, table, or yes/no comes out the other side, you do not have a job yet.",
    points: [
      "Write the task in one sentence, then write what done looks like: a file, a table, a pass/fail, a length, a reader.",
      "If the only measure is \"does this sound good,\" you will not know when to stop, and neither will the model.",
    ],
  },
  {
    code: "02",
    title: "Write a brief that does not change every Tuesday",
    description:
      "The standing instructions. The model reads these before it sees today's source.",
    maude:
      "MAUDE keeps system instructions and tool descriptions on the server, not in whoever typed the last prompt. The user says what they want. The gateway already knows how to talk to models, which tools exist, and what the model is not allowed to invent.",
    points: [
      "Say the task, the reader, the constraints, and what the model is not allowed to make up.",
      "Keep it in a document you can version. Do not bury it in a thread you will lose.",
    ],
  },
  {
    code: "03",
    title: "Decide what goes in the window",
    description:
      "This run's source: files, notes, schema, last output. Nothing else.",
    maude:
      "MAUDE does not dump 170 tool descriptions into every message. It filters tools by what you asked, so the model only sees the ones that might matter. That is context on purpose. Paste the whole drive and the model will sound fluent while missing the page that mattered.",
    points: [
      "If a fact is not in the window, the model cannot use it. It will fill the gap with a likely-sounding sentence.",
      "Put in the source this job needs. Leave out the rest.",
    ],
  },
  {
    code: "04",
    title: "Give it tools with names and limits",
    description:
      "Search, read, write, query — each with an input shape and a permission. Not an open shell to the machine.",
    maude:
      "MAUDE's tools run on the server: files, shell, browser, GitHub, Gmail, Drive, calendar, image generation. The model does not reach into the machine. It asks. The gateway runs the call or refuses it. Sensitive steps can wait for a person. The call, the arguments, and what came back get logged.",
    points: [
      "Each tool has a name, an input shape, and a permission.",
      "A tool you cannot inspect is a hole. If you cannot say what it did, you cannot debug the next miss.",
    ],
  },
  {
    code: "05",
    title: "Run a loop that can stop",
    description:
      "Look, act, check, stop. Someone has to decide when the model may call a tool, when a person must look, and when the run is finished.",
    maude:
      "When MAUDE works a multi-step job it does not send one reply and quit. It calls a tool, reads the result, calls the next one, and keeps going until the job is done or a budget hits. Subagents and execute_plan do that with inherited tools. Docker isolation and step/token caps keep a long job from wandering overnight.",
    points: [
      "A single reply is not a loop. Work that uses tools needs a stop condition.",
      "Put a cap on steps, tokens, and time. A run that cannot stop is not a method. It is a chat that got away from you.",
    ],
  },
  {
    code: "06",
    title: "Check the result and keep a trail",
    description:
      "Score against the finished state you wrote. Keep enough log to replay the run.",
    maude:
      "MAUDE can show traces: which model ran, which tools fired, what they returned, how long it took. Power users open that. Casual users see the answer. Either way the trail exists, so a bad run is something you can read, not a vibe you remember from a thread.",
    points: [
      "Check against the done state you wrote: a test, a diff, a spec, a person at a checkpoint. Not against whether the prose sounds sure of itself.",
      "Log what the model saw, what it called, and what came back. If you cannot replay it, you cannot fix it.",
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
            Lesson
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            The Anatomy of a Harness
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
            A model writes the next word. A harness is everything around it
            that turns that into a job you can run again. MAUDE is the
            example.
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
              A language model is a function. You give it text. It predicts
              the next piece of that text, then the next, until it stops. It
              does not have your files. It cannot search the web unless
              something else searches for it. It cannot send mail, open a
              pull request, or know that last week's summary already exists
              on disk. Left alone, it is a very good guesser with no way to
              reach your files, your mail, or the rest of the machine.
            </p>
            <p>
              A harness is the software around that guesser. It decides what
              the model is allowed to see, which actions it is allowed to
              ask for, when the work is finished, and how you tell whether
              the result is any good. Chat is you and a model taking turns
              in a window. A harness is a process: same brief, same tools,
              same checks, next week.
            </p>
            <p>
              MAUDE is a harness I built for myself. The models are
              Nemotron on a DGX Spark, plus cloud models when the job needs
              them. The harness is everything else: one gateway, a catalog
              of tools, a loop that can call those tools and come back, a
              log of what happened, and a stop when the job is done or a
              budget runs out. You talk to MAUDE from a terminal, a Mac
              client, a phone, Telegram, or a web dashboard. The model
              never sees that. It sees a request, a short list of tools,
              and whatever context the gateway packed for this turn.
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
            Why you would build one
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--text-secondary)]">
            <p>
              Work repeats. Monday you asked a chat box to summarize a
              folder of notes. You pasted three files, forgot the fourth,
              got a draft, argued with it, and by Thursday you could not
              remember which prompt actually helped. Next Monday someone
              else has the same job. The chat is gone. The method was never
              written down. That is not a workflow. That is a lucky
              afternoon.
            </p>
            <p>
              A harness is useful because it takes the job out of whoever
              happened to be typing. The brief lives in the system. The
              tools have names. The checks run whether you are watching or
              not. You can inspect a bad run instead of reconstructing it
              from memory.
            </p>
            <p>
              ChatGPT, Claude, and Gemini are products. They wrap a model
              in their own harness: memory they choose, tools they choose,
              logs you do not own. That is fine until you need the model to
              touch your mail, your repo, your machine, or a local model
              that never leaves the building. Then you either live inside
              their product or you build the wrap yourself.
            </p>
            <p>
              I built MAUDE because I did not want three apps, three bills,
              and no shared context. I wanted Claude when the job needed
              it, a local model when the file should not leave the Spark,
              and the same tools either way. The harness is what makes
              those models interchangeable. The user asks. The gateway
              picks a model, clips the tool list, runs the calls, and
              streams the result back.
            </p>
            <p>
              Introduction to AI is how you put a live task in front of a
              model for the first time. A harness is how that task stops
              depending on a prompt you will not remember.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Walkthrough
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            What happens when you ask MAUDE to do something
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--text-secondary)]">
            <p>
              Say you ask MAUDE to draft a reply to a client thread and
              attach the latest schedule from Drive. You are not talking to
              Claude or Nemotron. You are talking to the gateway. The
              gateway reads the request and does the unglamorous work the
              model cannot do for itself.
            </p>
            <p>
              It picks a model for this job. It does not send the full tool
              catalog. It activates the tools that look relevant: mail,
              Drive, maybe calendar. It packs a window: standing
              instructions, this message, those tool descriptions. Then it
              sends that package to the model.
            </p>
            <p>
              The model cannot fetch the thread. It can only say, in a
              format the gateway understands, that it wants to call a mail
              tool with these arguments. The gateway runs that call, or
              refuses it, and hands the result back. The model reads the
              result and maybe asks for a Drive file. Same pattern. When it
              has enough, it writes the reply. The gateway returns that to
              you, with a trace you can open if you want to see which tools
              fired and how long they took.
            </p>
            <p>
              None of that is the model being clever. The model is still
              predicting the next token. The harness is what made \"draft
              a reply and attach the schedule\" possible. Without it you
              would be pasting the thread into a chat box, downloading the
              schedule yourself, and hoping you remembered to say who the
              reader is.
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
            What a harness actually does
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Six jobs. MAUDE does all of them. A smaller harness can do
            three of them and still be worth building.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Packs the window",
                text: "Puts the brief and this run's source in front of the model. In MAUDE that includes a filtered tool list so 170 tools do not land in every prompt.",
              },
              {
                title: "Offers tools",
                text: "Named actions with schemas and limits. Mail, files, shell, browser, GitHub. The model asks. The gateway runs the call or says no.",
              },
              {
                title: "Runs the loop",
                text: "Look, act, check, stop. Multi-step work in MAUDE is not one reply. It is tool calls until the job is done or a cap is hit.",
              },
              {
                title: "Keeps a trail",
                text: "Which model, which tools, what came back, how long. You can read a bad run. You do not have to reconstruct it from a chat.",
              },
              {
                title: "Checks the result",
                text: "Against a finished state you wrote, or a person at a checkpoint. MAUDE can hold sensitive steps for approval instead of firing them.",
              },
              {
                title: "Hands it back",
                text: "The same answer on a terminal, a phone, or the web. The harness owns the clients. The model does not.",
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
            How to build one
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--text-secondary)]">
            <p>
              Do not start by cloning MAUDE. MAUDE is a daily driver with
              170 tools and five clients. That is years of wrapping. Start
              with one job. Write the brief. Give the model one or two
              tools. Check the output against something you wrote down.
              Log the calls. Run it a second time on a new example. If
              that works, you have a harness. You can add tools later.
            </p>
            <p>
              The parts below are the same parts in MAUDE. On a first
              harness, most of them are a Python script and a folder of
              files. That is enough.
            </p>
          </div>
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
                <p
                  className="mt-4 max-w-3xl text-sm text-[var(--text-primary)]"
                  style={{ lineHeight: 1.7 }}
                >
                  {part.maude}
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

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Scale
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            You do not need 170 tools
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[var(--text-secondary)]">
            <p>
              A first harness might be: a standing prompt, a folder of
              source files, one function that searches that folder, a
              second function that writes a draft to disk, and a third
              that diffs the draft against last week's. Run it twice. If
              the second run still matches the spec, you have something
              you can hand to a teammate.
            </p>
            <p>
              MAUDE grew because the jobs grew. Mail, calendar, GitHub,
              a phone client, a local model that never leaves the Spark.
              The anatomy did not change. There is still a job, a brief,
              a window, tools, a loop, and a check. There is just more of
              each. If you copy the size and skip the anatomy, you get a
              chat box with extra buttons.
            </p>
            <p>
              Read the{" "}
              <Link href="/projects/maude" className="text-[var(--accent)] hover:underline">
                MAUDE case study
              </Link>{" "}
              if you want the full stack. The lesson here is the wrap,
              not the hardware.
            </p>
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Next
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            If you want this for your team, email me.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            Introduction to AI if they have not used a model at work yet.
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
