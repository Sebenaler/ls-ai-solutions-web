const solutions = [
  {
    tag: 'Reporting',
    title: 'Automated Report Generation',
    description:
      'We build scripts that pull data from your existing tools (spreadsheets, databases, APIs), analyze it with Claude AI, and produce clean, formatted reports — on a schedule or on demand.',
    bullets: [
      'Weekly/monthly business summaries',
      'Sales and revenue breakdowns',
      'Custom KPI dashboards exported to PDF or email',
    ],
  },
  {
    tag: 'Analysis',
    title: 'Data Analysis & Insights',
    description:
      'Stop staring at spreadsheets trying to find the story. Our automations use Claude to read your data, identify trends, and deliver plain-English insights you can actually use.',
    bullets: [
      'Customer behavior analysis',
      'Inventory and supply chain pattern detection',
      'Financial trend summaries',
    ],
  },
  {
    tag: 'Automation',
    title: 'Document & Workflow Automation',
    description:
      'Repetitive document tasks — data entry, formatting, summarizing — are exactly what AI does best. We build Python scripts to handle them end to end.',
    bullets: [
      'Invoice and contract processing',
      'Email summarization and drafting',
      'Data extraction from PDFs and forms',
    ],
  },
  {
    tag: 'Custom',
    title: 'Custom AI Solutions',
    description:
      "Have a workflow that doesn't fit neatly into a category? We'll scope it out with you and build something purpose-made. If Claude and Python can do it, we can build it.",
    bullets: [
      'Internal Q&A chatbots trained on your documents',
      'Automated customer follow-up workflows',
      'Anything repetitive, text-heavy, or data-driven',
    ],
  },
]

const tagColors: Record<string, string> = {
  Reporting: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Analysis: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  Automation: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Custom: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
}

export default function Solutions() {
  return (
    <>
      {/* Header */}
      <section className="bg-charcoal-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-emerald font-semibold text-sm uppercase tracking-widest mb-4">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Solutions Built Around Your Business</h1>
          <p className="text-gray-300 text-lg">
            Every automation we deliver is custom-built using Claude AI and Python — designed around how
            you actually work, not a generic template.
          </p>
        </div>
      </section>

      {/* Solutions list */}
      <section className="py-20 px-6 bg-white dark:bg-charcoal-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 dark:bg-charcoal-900 border border-gray-100 dark:border-charcoal-700 rounded-2xl p-8 hover:shadow-md transition-shadow duration-200"
            >
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${tagColors[s.tag]}`}
              >
                {s.tag}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{s.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">{s.description}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="mt-1 w-2 h-2 rounded-full bg-brand-emerald flex-shrink-0"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-900 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Solution Fits?</h2>
          <p className="text-gray-300 mb-8">
            Reach out and we'll walk through your workflow together. No commitment — just a conversation
            about where AI can save you the most time.
          </p>
          <a
            href="mailto:contact@lsaisolutions.com"
            className="bg-brand-emerald hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
