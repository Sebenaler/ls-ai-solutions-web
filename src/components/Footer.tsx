import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-bold text-lg">
            <span className="text-brand-emerald">L&amp;S</span>
            <span className="text-white"> AI Solutions</span>
          </p>
          <p className="text-sm mt-1">Bringing AI automation to businesses that need it most.</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
          <NavLink to="/solutions" className="hover:text-white transition-colors">Solutions</NavLink>
          <NavLink to="/about" className="hover:text-white transition-colors">About</NavLink>
        </nav>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} L&amp;S AI Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
