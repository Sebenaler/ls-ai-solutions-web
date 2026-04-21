const values = [
  {
    title: 'Accessible AI',
    description:
      "You don't need to understand machine learning to benefit from it. We translate complex AI capabilities into simple, practical tools that fit your workflow.",
  },
  {
    title: 'Built for Small Business',
    description:
      'Enterprise software is overkill for most small teams. We build lean, purpose-built automations that solve your specific problems — nothing more, nothing bloated.',
  },
  {
    title: 'Transparent Process',
    description:
      "We work closely with you from discovery through delivery. You always know what we're building and why.",
  },
]

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-charcoal-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-emerald font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            We Bring AI to Businesses That Need It Most
          </h1>
          <p className="text-gray-300 text-lg">
            L&amp;S AI Solutions was built on a simple idea: AI should work for everyone — not just companies
            with data science teams.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white dark:bg-charcoal-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Small and medium-sized businesses generate enormous amounts of data every day — invoices,
              reports, customer records, spreadsheets — but rarely have the bandwidth to make full use of it.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We use <span className="font-semibold text-gray-900 dark:text-white">Claude AI</span> and{' '}
              <span className="font-semibold text-gray-900 dark:text-white">Python</span> to build automations that turn
              that raw data into actionable insights, generated reports, and time saved — without requiring
              any technical knowledge from you.
            </p>
          </div>
          <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-2xl p-8 text-white">
            <p className="text-brand-emerald font-semibold uppercase text-xs tracking-widest mb-3">Powered By</p>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-emerald inline-block"></span>
                Claude (Anthropic) — advanced language AI for reasoning and generation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-light inline-block"></span>
                Python — flexible scripting to connect, transform, and automate data
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-emerald inline-block"></span>
                Custom-built per client — no generic SaaS, no one-size-fits-all
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-charcoal-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white dark:bg-charcoal-800 rounded-2xl p-8 border border-gray-100 dark:border-charcoal-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
