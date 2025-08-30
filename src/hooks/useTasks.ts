import { useContext } from 'react';
import { TasksContext, type TasksContextType } from '../contexts/tasks-context/TasksContext.tsx';

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
