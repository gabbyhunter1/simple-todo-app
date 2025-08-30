import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx';
import { TasksProvider } from './contexts/tasks-context/provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </StrictMode>
);
