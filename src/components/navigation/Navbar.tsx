
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navigationItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Contact', target: 'contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (target: string) => {
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: 'smooth' })

    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button
          className="navbar__logo"
          onClick={() => scrollToSection('home')}
          aria-label="Go to home"
        >
          <span className="navbar__logo-mark">D</span>
          <span className="navbar__logo-name">Devinda</span>
        </button>

        <nav className="navbar__links" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__lyra"
            onClick={() => {
              // LYRA interaction will be connected later
            }}
          >
            <span className="navbar__lyra-dot" />
            LYRA
          </button>

          <button
            className="navbar__menu"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`navbar__mobile ${
          menuOpen ? 'navbar__mobile--open' : ''
        }`}
      >
        {navigationItems.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollToSection(item.target)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  )
}