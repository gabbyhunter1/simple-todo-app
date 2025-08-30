import { createContext } from 'react';
import type { Task } from '../../App.tsx';

export type TasksContextType = {
  tasks: Task[];
  activeTasks: Task[];
  completedTasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  clearCompleted: () => void;
};

export const TasksContext = createContext<TasksContextType | undefined>(undefined);
