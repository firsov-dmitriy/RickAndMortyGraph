import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import App from './components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </HelmetProvider>
  </StrictMode>,
);
