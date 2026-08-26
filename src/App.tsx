import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ProductsPage } from './pages/Products';
import { ProductSeriesPage } from './pages/ProductSeries';
import { WhyTerraxPage } from './pages/WhyTerrax';
import { ApplicationsPage } from './pages/Applications';
import { ContactPage } from './pages/Contact';

// ─── 404 Not Found ────────────────────────────────────────────────────────────
function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        paddingTop: '8rem',
        backgroundColor: 'var(--color-terrax-offwhite)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          color: 'var(--color-terrax-green)',
          opacity: 0.15,
          lineHeight: 1,
          display: 'block',
        }}
        aria-hidden="true"
      >
        404
      </span>
      <h1
        className="tx-heading-lg"
        style={{ color: 'var(--color-terrax-charcoal)', marginTop: '1rem', marginBottom: '1rem' }}
      >
        Page Not Found
      </h1>
      <p className="tx-body" style={{ maxWidth: '40ch', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist. Return to the homepage to explore TERRAX products.
      </p>
      <a href="/" className="btn-primary" style={{ textDecoration: 'none' }}>
        Go to Homepage
      </a>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <HomePage />
            </RootLayout>
          }
        />
        <Route
          path="/about"
          element={
            <RootLayout>
              <AboutPage />
            </RootLayout>
          }
        />
        <Route
          path="/products"
          element={
            <RootLayout>
              <ProductsPage />
            </RootLayout>
          }
        />
        {/* All 6 product series — dynamic route */}
        <Route
          path="/products/:slug"
          element={
            <RootLayout>
              <ProductSeriesPage />
            </RootLayout>
          }
        />
        <Route
          path="/why-terrax"
          element={
            <RootLayout>
              <WhyTerraxPage />
            </RootLayout>
          }
        />
        <Route
          path="/applications"
          element={
            <RootLayout>
              <ApplicationsPage />
            </RootLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <RootLayout>
              <ContactPage />
            </RootLayout>
          }
        />
        {/* 404 */}
        <Route
          path="*"
          element={
            <RootLayout>
              <NotFoundPage />
            </RootLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
