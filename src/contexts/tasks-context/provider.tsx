import { useState, useEffect, type ReactNode } from 'react';
import { TasksContext } from './TasksContext.tsx';
import type { Task } from '../../types/task-type.ts';

const STORAGE_KEY = 'tasks';

type TasksProviderProps = {
  children: ReactNode;
};

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <TasksContext.Provider value={{ tasks, activeTasks, completedTasks, addTask, deleteTask, toggleTask, clearCompleted, clearAll }}>
      {children}
    </TasksContext.Provider>
  );
};
