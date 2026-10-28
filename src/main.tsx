import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  document.body.innerHTML = '<div style="padding:2rem;color:red">FATAL: #root element not found in index.html</div>';
  throw new Error('Missing #root element');
}

try {
  ReactDOM.createRoot(rootEl).render(
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-muted-foreground">Memuat Free Web Builder...</div>}>
      <App />
    </Suspense>,
  );
} catch (e: any) {
  rootEl.innerHTML = `<div style="padding:2rem;color:red;font-family:sans-serif"><h2>Render Error</h2><pre>${e?.message || e}</pre></div>`;
  console.error('Render fatal:', e);
}