import { useState } from 'react'
import {
  ArrowDown,
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Database,
  Layers3,
  Menu,
  Network,
  Sparkles,
  X,
} from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

const products = [
  {
    id: 'migrate',
    name: 'Data migration',
    shortName: 'Migrate',
    title: 'Move your data.\nKeep your momentum.',
    description:
      'Move with confidence. We make complex data migrations feel clear, controlled, and built around the way your business works.',
    icon: ArrowDownLeft,
    number: '01',
    accent: 'mint',
    bullets: ['Plan every move with clarity', 'Protect data integrity end to end', 'Go live with a team by your side'],
  },
  {
    id: 'quality',
    name: 'Data quality',
    shortName: 'Quality',
    title: 'Better data starts\nwith knowing it.',
    description:
      'Turn scattered, inconsistent information into data your team can trust, understand, and put to work every day.',
    icon: Sparkles,
    number: '02',
    accent: 'lavender',
    bullets: ['Spot issues before they spread', 'Build a shared view of your data', 'Make confident decisions, faster'],
  },
  {
    id: 'intelligence',
    name: 'Data intelligence',
    shortName: 'Intelligence',
    title: 'Find the signal\nin all your data.',
    description:
      'Connect the dots across your business. Bring the right context and insights closer to the people who need them.',
    icon: Network,
    number: '03',
    accent: 'peach',
    bullets: ['Connect information across systems', 'Surface the context behind the numbers', 'Turn insight into your next move'],
  },
] as const

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="ibexdata.ai home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><span /><span /><span /></span>
          <span>ibexdata<span className="brand-dot">.</span>ai</span>
        </Link>
        <button
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {products.map((product) => (
            <NavLink
              key={product.id}
              to={`/products/${product.id}`}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {product.name}
            </NavLink>
          ))}
          <a className="nav-cta" href="mailto:hello@ibexdata.ai" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  )
}

function OrbitalIllustration() {
  return (
    <div className="orbital-art" aria-label="Illustration of connected data systems" role="img">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbit-core"><Database size={30} strokeWidth={1.45} /></div>
      <div className="orbit-node node-top"><Layers3 size={17} /></div>
      <div className="orbit-node node-right"><Network size={17} /></div>
      <div className="orbit-node node-bottom"><Sparkles size={17} /></div>
      <span className="orbit-spark spark-one">✳</span>
      <span className="orbit-spark spark-two">✳</span>
      <span className="orbit-caption">DATA, IN MOTION</span>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> DATA THAT MOVES YOU FORWARD</span>
            <h1>Make your data<br /><span>make a difference.</span></h1>
            <p className="hero-description">
              At ibexdata.ai, we help ambitious teams move, understand, and make more of their data. The right data, in the right place, changes what’s possible.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="mailto:hello@ibexdata.ai">
                Let’s find your way forward <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#products">Meet our products <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><span className="note-line" /> A clearer path from data to possibility.</div>
          </div>
          <OrbitalIllustration />
          <a className="scroll-cue" href="#products" aria-label="Scroll to our products"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section id="products" className="products-section section-wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THREE WAYS TO MOVE FORWARD</span>
              <h2>Make more of<br />what you already have.</h2>
            </div>
            <p>From the first move to the next big idea, our products help you make data work harder for your business.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Link
                  className={`product-card card-${product.accent}`}
                  key={product.id}
                  to={`/products/${product.id}`}
                >
                  <div className="card-topline"><span>{product.number} / 03</span><ArrowUpRight size={19} /></div>
                  <div className="product-icon"><Icon size={22} strokeWidth={1.7} /></div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="card-link">Explore {product.shortName.toLowerCase()} <ArrowRight size={15} /></span>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="closing-section section-wrap">
          <div className="closing-mark"><span className="brand-mark"><span /><span /><span /></span></div>
          <div>
            <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Let’s get your data<br />going somewhere.</h2>
          </div>
          <a className="button button-light" href="mailto:hello@ibexdata.ai">Talk to our team <ArrowUpRight size={16} /></a>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ProductPage({ productId }: { productId: string }) {
  const product = products.find((item) => item.id === productId)
  const location = useLocation()

  if (!product) {
    return (
      <>
        <main className="not-found section-wrap">
          <span className="eyebrow">PAGE NOT FOUND</span>
          <h1>Looks like this data<br />took a detour.</h1>
          <Link className="button button-dark" to="/">Back to home <ArrowRight size={17} /></Link>
        </main>
        <Footer />
      </>
    )
  }

  const Icon = product.icon
  const nextProduct = products[(products.findIndex((item) => item.id === productId) + 1) % products.length]

  return (
    <>
      <main key={location.pathname} className="product-page section-wrap">
        <div className="breadcrumb"><Link to="/">Home</Link><ChevronDown size={14} className="breadcrumb-chevron" /><span>{product.name}</span></div>
        <section className={`product-hero product-hero-${product.accent}`}>
          <div className="product-hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> IBEXDATA.AI / {product.number}</span>
            <h1>{product.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h1>
            <p className="hero-description">{product.description}</p>
            <a className="button button-dark" href="mailto:hello@ibexdata.ai">Let’s talk about {product.shortName.toLowerCase()} <ArrowRight size={17} /></a>
          </div>
          <div className="product-visual">
            <div className="visual-ring ring-a" /><div className="visual-ring ring-b" />
            <div className="visual-card">
              <div className="visual-card-top"><span className="visual-status" /> {product.name.toUpperCase()}</div>
              <div className="visual-big-icon"><Icon size={39} strokeWidth={1.35} /></div>
              <div className="visual-lines"><span /><span /><span /></div>
              <div className="visual-progress"><span /></div>
              <div className="visual-card-bottom"><span>IN GOOD HANDS</span><Check size={16} /></div>
            </div>
            <span className="visual-spark">✳</span>
          </div>
        </section>
        <section className="benefits-section">
          <span className="eyebrow">A BETTER WAY FORWARD</span>
          <div className="benefits-heading"><h2>Clear steps.<br />Meaningful progress.</h2><p>We bring the right people and the right tools together, so your next move feels less complicated and more like yours.</p></div>
          <div className="benefits-list">
            {product.bullets.map((bullet, index) => (
              <div className="benefit-row" key={bullet}><span>0{index + 1}</span><p>{bullet}</p><Check size={17} /></div>
            ))}
          </div>
        </section>
        <Link className={`next-product next-${nextProduct.accent}`} to={`/products/${nextProduct.id}`}>
          <span className="eyebrow">KEEP EXPLORING <ArrowDownLeft size={14} /></span>
          <span className="next-name">{nextProduct.name}</span>
          <ArrowUpRight className="next-arrow" size={22} />
        </Link>
      </main>
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <Link className="brand footer-brand" to="/">
        <span className="brand-mark"><span /><span /><span /></span>
        <span>ibexdata<span className="brand-dot">.</span>ai</span>
      </Link>
      <span className="footer-copy">Data, going places. © {new Date().getFullYear()} ibexdata.ai</span>
      <a href="mailto:hello@ibexdata.ai">Say hello <ArrowUpRight size={14} /></a>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {products.map((product) => (
          <Route key={product.id} path={`/products/${product.id}`} element={<ProductPage productId={product.id} />} />
        ))}
        <Route path="*" element={<ProductPage productId="not-found" />} />
      </Routes>
    </>
  )
}

export default App
