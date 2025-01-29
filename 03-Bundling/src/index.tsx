import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelloComponent } from './component';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <HelloComponent />
  </div>
);
