import type { Task } from '../../App.tsx';
import { Check, X } from 'lucide-react';
import { useTasks } from '../../hooks/useTasks.ts';

type TasksListTabProps = {
  tasks: Task[];
};

const TasksListTab = ({ tasks }: TasksListTabProps) => {
  const { toggleTask, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return;
  }

  switch (tasks.length) {
    case 0:
      return;
  }

  return tasks.map(task => (
    <div
      key={task.id}
      className={`flex items-center gap-3 p-3 rounded-lg border ${
        task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-gray-300'
      }`}>
      <button
        onClick={() => toggleTask(task.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          task.completed ? 'bg-green-600 border-green-600' : 'border-gray-300 hover:border-green-500'
        }`}
        aria-label={task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}>
        {task.completed && <Check size={14} className="text-white" />}
      </button>

      <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>{task.text}</span>

      <button onClick={() => deleteTask(task.id)} className="flex-shrink-0 p-1 text-gray-400 hover:text-red-600 rounded" aria-label="Удалить задачу">
        <X size={16} />
      </button>
    </div>
  ));
};

export default TasksListTab;
