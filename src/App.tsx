import React from 'react';
import AddTaskForm from './components/AddTaskForm.tsx';
import TasksStats from './components/TasksStats.tsx';
import TasksList from './components/tasks-list/TasksList.tsx';
import BottomText from './components/BottomText.tsx';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ToDo App</h1>
          <h2 className="text-gray-600">Управляйте своими задачами</h2>
        </header>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <AddTaskForm />
          <TasksStats />
          <TasksList />
          <BottomText />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
