import React, { type PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { TasksProvider } from '../contexts/tasks-context/provider.tsx';
// ⬇️ adjust these paths to your actual files

export function renderWithProvider(ui: React.ReactElement) {
  const Wrapper = ({ children }: PropsWithChildren) => <TasksProvider>{children}</TasksProvider>;
  return render(ui, { wrapper: Wrapper });
}
