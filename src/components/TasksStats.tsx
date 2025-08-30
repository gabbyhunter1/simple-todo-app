import { useTasks } from '../hooks/useTasks.ts';

const TasksStats = () => {
  const { tasks, activeTasks, completedTasks } = useTasks();

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
      <div className="p-3 bg-gray-50 rounded-lg">
        <div className="text-xl font-semibold text-gray-900">{tasks.length}</div>
        <div className="text-sm text-gray-600">Всего</div>
      </div>
      <div className="p-3 bg-orange-50 rounded-lg">
        <div className="text-xl font-semibold text-orange-600">{activeTasks.length}</div>
        <div className="text-sm text-gray-600">Активных</div>
      </div>
      <div className="p-3 bg-green-50 rounded-lg">
        <div className="text-xl font-semibold text-green-600">{completedTasks.length}</div>
        <div className="text-sm text-gray-600">Выполнено</div>
      </div>
    </div>
  );
};

export default TasksStats;
