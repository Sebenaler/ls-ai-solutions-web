import { Link } from 'react-router-dom'

const highlights = [
  {
    icon: '📊',
    title: 'Report Generation',
    description: 'Turn raw data into polished, professional reports automatically — no manual formatting required.',
  },
  {
    icon: '🔍',
    title: 'Data Analysis',
    description: 'Let AI surface trends, patterns, and insights from your data so you can make smarter decisions faster.',
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks with custom Python scripts powered by Claude AI.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-emerald font-semibold text-sm uppercase tracking-widest mb-4">
            AI Automation for Small &amp; Medium Businesses
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Work Smarter with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-light">
              AI That Works for You
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We build custom AI-powered automations using Claude and Python to handle the tedious work —
            so you can focus on what actually matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              className="bg-brand-emerald hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              See Our Solutions
            </Link>
            <Link
              to="/about"
              className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 bg-white dark:bg-charcoal-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">What We Can Automate for You</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              From raw spreadsheets to automated insights — we handle the complexity so you don't have to.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 dark:bg-charcoal-900 rounded-2xl p-8 border border-gray-100 dark:border-charcoal-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-brand-emerald to-brand-light py-16 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to See What AI Can Do for Your Business?</h2>
          <p className="text-emerald-50 mb-8">
            We work directly with you to understand your workflow and build solutions that fit — no AI expertise required on your end.
          </p>
          <Link
            to="/solutions"
            className="bg-white text-brand-emerald font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
          >
            Explore Solutions
          </Link>
        </div>
      </section>
    </>
  )
}
