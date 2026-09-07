export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  hero: string;
  heroAlt: string;
  sections: BlogSection[];
  relatedProjects?: { label: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-local-first-ai-studio-on-dgx-spark",
    title: "Local-First AI on DGX Spark",
    description:
      "Why I built MAUDE around a local AI workstation, where it helps, and what still needs to be made repeatable.",
    date: "2026-05-30",
    readingTime: "5 min read",
    category: "Creative AI",
    tags: ["DGX Spark", "Local AI", "Agents", "Creative Tools"],
    hero: "/images/projects/maude.png",
    heroAlt: "MAUDE running as a local AI operating environment",
    relatedProjects: [{ label: "View MAUDE TUI", href: "/projects/maude" }],
    sections: [
      {
        heading: "The short version",
        body: [
          "I built MAUDE because my AI work kept spreading across separate tools. Code lived in one workflow. Image generation lived in another. Research, files, GitHub, calendar work, and publishing each had their own interface. The friction was not one big failure. It was the repeated cost of moving context by hand.",
          "A local-first AI setup does not make every task faster. It also does not remove the need for hosted models. The useful part is control. The gateway, tools, file access, and workflow state start on my machine, so a task can move across models and tools without losing the project it belongs to.",
        ],
      },
      {
        heading: "What local-first means here",
        body: [
          "Local-first does not mean local-only. MAUDE can route to cloud models when they are the right fit. It can also use local models when privacy, cost, latency, or tool access matter more. The point is not model purity. The point is deciding where each part of the work should run.",
          "That matters for creative and technical production. A real project may include source files, generated images, reference material, notes, videos, API keys, deployment details, and private client context. I do not want that context copied into a different web app every time I switch from writing to coding to image generation.",
          "The local machine becomes the workspace. The models become interchangeable workers inside that workspace. That is a different mental model from opening a chatbot and pasting in a problem from scratch.",
        ],
      },
      {
        heading: "The jobs it handles well",
        body: [
          "The setup is most useful when a task has several steps. For example, I might ask the system to inspect a Next.js route, update page copy, run the build, read the error, fix the issue, and summarize what changed. That is not one model capability. It is a chain of file access, reasoning, shell commands, and verification.",
          "It also helps with creative workflows that cross formats. A portfolio update might require checking project copy, generating or selecting imagery, adding metadata, linking related work, and preparing a short social post. Those steps are small on their own. The value is keeping them in one workflow instead of treating them as separate chores.",
          "The same pattern applies to research. I can gather notes, compare sources, draft an outline, turn that outline into a post, and connect the post back to a project page. The important part is not automation for its own sake. It is reducing the places where context gets dropped.",
        ],
      },
      {
        heading: "Where hosted tools are still better",
        body: [
          "A local-first setup has tradeoffs. Hosted products are usually smoother, easier to share, and faster to start using. They handle account setup, scaling, model updates, and product polish. For a simple question or a one-off rewrite, I still use hosted tools when they are more convenient.",
          "The local stack is also more work to maintain. Model versions change. Tool permissions need care. Logs need to be readable. Long-running jobs need recovery paths. A personal workstation can survive rough edges that a public product cannot.",
          "That is why I do not describe MAUDE as a finished product. It is a working local AI environment that I use, improve, and test against real tasks. The honest goal is to make that workflow more repeatable over time.",
        ],
      },
      {
        heading: "What I would improve next",
        body: [
          "The biggest gap is packaging. A system like this needs a clear setup path, sane defaults, explicit permissions, and better failure messages. If a tool cannot reach GitHub, the system should say that directly. If a model is unavailable, it should fall back or explain the next step.",
          "The second gap is observability. When several models and tools touch one task, I need a clean record of what happened: which model was used, which files changed, which commands ran, and what verification passed. Without that, automation becomes hard to trust.",
          "The next milestone is not a larger claim. It is a smaller promise that can be tested: make a local AI workflow that another technical user can install, understand, and recover when something breaks.",
        ],
      },
    ],
  },
  {
    slug: "ai-architectural-visualization-prompting-for-production",
    title: "AI Arch-Viz Prompting Notes",
    description:
      "Practical notes on using AI image generation for early architectural visualization without overstating what it can replace.",
    date: "2026-05-30",
    readingTime: "5 min read",
    category: "Visualization",
    tags: ["Arch-Viz", "Flux", "Prompting", "Real Estate"],
    hero: "/images/portfolio/01_beachfront_residential_golden_hour.png",
    heroAlt: "AI-generated beachfront architectural visualization at golden hour",
    relatedProjects: [{ label: "View Arch-Viz Work", href: "/projects/arch-viz" }],
    sections: [
      {
        heading: "The useful lane",
        body: [
          "AI architectural visualization is useful at the beginning of a project, when the team needs to explore tone, audience, lighting, camera language, and visual positioning. It can create fast visual references before a full 3D scene is worth building.",
          "That is a narrow but valuable lane. It is not the same as final visualization. A generated image is not a BIM model, a measured plan, or a dependable construction reference. If exact geometry matters, the image model should not be treated as the source of truth.",
          "The right expectation is concept direction. The output can help a client or designer decide whether a project should feel quiet, coastal, dense, premium, hospitality-focused, residential, or civic. It can start that conversation earlier than a traditional render pipeline would.",
        ],
      },
      {
        heading: "Prompt the camera before the mood",
        body: [
          "The strongest results came from prompts that described the camera before the emotional language. Lens length, camera height, time of day, light direction, weather, and framing gave the model concrete constraints. Broad words like luxury, cinematic, and premium were less useful by themselves.",
          "For a beachfront residence, I would start with the property type, camera position, focal length, sun angle, and material palette. Only after that would I add atmosphere. If mood leads the prompt, the model often drifts toward generic resort imagery that looks polished but says little about the actual design direction.",
          "This mirrors normal architectural photography. A low camera with a wide lens says something different from a compressed telephoto view. Blue hour suggests a different sales story than hard noon sun. The prompt should make those choices intentionally.",
        ],
      },
      {
        heading: "Watch for false polish",
        body: [
          "The main risk is false polish. AI images can look finished while hiding structural problems. Facades may repeat in impossible ways. Columns may not align. Windows may imply floor plates that do not exist. Interior views may ignore circulation, code, or basic spatial logic.",
          "That does not make the images useless. It means they need labels and boundaries. I would present them as AI-assisted concept references, not as resolved architecture. The difference matters because clients can easily read visual polish as design certainty.",
          "A good review pass should ask simple questions. Does the building make sense? Does the scale feel plausible? Do materials connect from one area to another? Is the camera selling an idea that the design can actually support later?",
        ],
      },
      {
        heading: "How I would use it in a real workflow",
        body: [
          "I would use this workflow to create a small set of visual territories. One direction might emphasize hospitality and warm evening light. Another might focus on clean residential calm. A third might test a denser urban or mixed-use read. Each territory would be clearly labeled as a concept study.",
          "After that, the team should choose a direction and rebuild it with controlled geometry, real references, and a normal visualization pipeline. That step is where design accuracy enters. The AI image helps identify the target. It does not replace the work needed to hit the target correctly.",
          "Used honestly, this can save time. Used carelessly, it can create confusion. The difference is whether the image is treated as a sketch with strong rendering quality or as a finished design artifact.",
        ],
      },
      {
        heading: "What I would test next",
        body: [
          "The next useful test is consistency. One good image is easy to admire. A useful workflow needs a sequence: exterior, lobby, amenity, room, aerial, and detail views that feel like the same project. That is harder.",
          "I would also test handoff. If a generated concept is selected, how cleanly can it be translated into a modeled scene, a mood board, or a client deck? That handoff determines whether the workflow is practical or just visually interesting.",
        ],
      },
    ],
  },
  {
    slug: "training-small-code-reviewers-for-real-repositories",
    title: "Small LoRA Code Reviewers",
    description:
      "Why I am testing small repo-aware LoRA adapters as focused code reviewers instead of autonomous software engineers.",
    date: "2026-05-30",
    readingTime: "5 min read",
    category: "AI Engineering",
    tags: ["LoRA", "Code Review", "SFT", "Developer Tools"],
    hero: "/images/projects/code-assistant-lora.png",
    heroAlt: "Code Assistant LoRA multi-agent reviewer interface",
    relatedProjects: [
      { label: "View Code Assistant LoRA", href: "/projects/code-assistant-lora" },
    ],
    sections: [
      {
        heading: "The problem I am testing",
        body: [
          "General coding models can write plausible patches, but they often miss local repository habits. They may ignore naming patterns, test conventions, provider boundaries, startup assumptions, or deployment details that become obvious only after working in the codebase for a while.",
          "My experiment is narrow. I am testing whether small LoRA adapters can review bounded diffs for those local habits. I am not trying to make a small model replace a full coding agent, and I am not claiming that fine-tuning solves code review by itself.",
          "The question is practical: can a small, focused reviewer catch useful issues cheaply enough and consistently enough to improve the larger coding loop?",
        ],
      },
      {
        heading: "Why reviewer is the right role",
        body: [
          "Review is a better fit for a small adapter because the task can be constrained. The reviewer can receive a diff, a small amount of surrounding context, and a clear instruction: identify risks, missing tests, style mismatches, and likely integration problems.",
          "Patch authoring is broader. It requires planning, editing, resolving conflicts, running checks, and making tradeoffs across files. A small model can help with parts of that process, but I do not trust it as the owner of the whole change.",
          "This role split keeps responsibility clear. A stronger general model or a human can own the patch. The LoRA reviewer acts like a specialist who points out issues, not like a second author making uncoordinated edits.",
        ],
      },
      {
        heading: "What useful training data looks like",
        body: [
          "Useful examples are task-shaped. They include the diff, the relevant surrounding context, the expected finding, and the reason the finding matters. That teaches the adapter to inspect and explain, not just summarize code.",
          "A good example might show a route change that forgot to update metadata, a React component that breaks an existing loading state, or a Python edit that crosses a provider boundary the repo normally keeps separate. The expected response should name the issue and suggest a check or fix.",
          "Weak examples are broad repo dumps or generic descriptions of what a file does. Those may teach vocabulary, but they do not teach judgment. Review quality depends on judgment: what matters, what does not, and what evidence supports the finding.",
        ],
      },
      {
        heading: "How I evaluate the reviewer",
        body: [
          "A reviewer is useful if it catches real problems without creating too much noise. I care more about actionable findings than long explanations. A short note that points to the exact risk is better than a confident paragraph that says nothing specific.",
          "The evaluation should include held-out examples and real patches. Held-out examples show whether the adapter learned the review task instead of memorizing the training set. Real patches show whether the reviewer survives messy context, partial information, and ordinary project complexity.",
          "False positives matter. If the reviewer complains about harmless choices too often, people will ignore it. False negatives matter too, but a noisy reviewer can be worse than no reviewer because it adds review fatigue to an already complex workflow.",
        ],
      },
      {
        heading: "Where this could fit",
        body: [
          "The most realistic use is a layered coding workflow. A primary coding agent proposes a patch. Automated checks run. Small reviewers inspect narrow slices of the diff. A final synthesis step decides which findings matter and applies fixes deliberately.",
          "That workflow still needs verification. Tests, builds, type checks, and human review do not disappear. The LoRA reviewer is only useful if it improves the odds that the right issues get noticed before the patch lands.",
          "That is the standard I am using. Not whether the system sounds smart, but whether it produces findings that lead to better patches with less wasted review time.",
        ],
      },
    ],
  },
];

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
