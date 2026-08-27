import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ProductsPage } from './pages/Products';
import { ProductSeriesPage } from './pages/ProductSeries';
import { WhyTerraxPage } from './pages/WhyTerrax';
import { ApplicationsPage } from './pages/Applications';
import { ManufacturingPage } from './pages/Manufacturing';
import { ContactPage } from './pages/Contact';

import { NotFoundPage } from './pages/NotFound';

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
          path="/manufacturing"
          element={
            <RootLayout>
              <ManufacturingPage />
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
