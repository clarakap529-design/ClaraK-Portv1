import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ProjectDetail } from './components/ProjectDetail';
import { ScrollToTop } from './components/ScrollToTop';

function DevServerHud() {
  if (!import.meta.env.DEV) return null;
  return (
    <div
      className="pointer-events-none fixed bottom-3 right-3 z-[100] max-w-[min(100vw-1.5rem,20rem)] rounded-lg border border-black/10 bg-white/95 px-3 py-2 text-left text-[11px] leading-snug text-[#2e2e2e] shadow-md backdrop-blur-sm"
      role="status"
      aria-live="polite"
    >
      <p className="font-['Inter',sans-serif] font-semibold text-[#2d6383]">Vite dev server</p>
      <p className="mt-1 font-['Inter',sans-serif] text-[rgba(0,0,0,0.72)]">
        This tab is{' '}
        <span className="whitespace-nowrap font-mono text-[11px] text-[#2d6383]">
          {typeof window !== 'undefined' ? window.location.origin : '…'}
        </span>
        . It must match the URL in the terminal where <span className="font-mono">npm run dev</span> is running. If
        dev fails with “port in use,” stop the other process on that port, then restart. Hard-refresh: Cmd+Shift+R.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <DevServerHud />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}