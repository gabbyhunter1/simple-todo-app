import { useMemo } from 'react';
import { useTasks } from './useTasks.ts';

export const useFilteredTasks = (filter: 'all' | 'active' | 'completed') => {
  const { tasks } = useTasks();
  return useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed);
    if (filter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
  }, [tasks, filter]);
};
