import React from 'react';
import { createRoot } from 'react-dom/client';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const container = document.getElementById('root');
const root = createRoot(container); 

Sentry.init({
    dsn: "https://13f813306a6f4d94bfb34621ad447316@o14188.ingest.sentry.io/5931036",
    integrations: [new Integrations.BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  


root.render(<App tab="home" />);

registerServiceWorker();
