import { useState, useRef } from 'react';
import { useTasks } from '../../hooks/useTasks.ts';
import { Trash, Trash2 } from 'lucide-react';
import { filtersList, type FilterType } from '../../types/filter-type.ts';
import TasksListTab from './TasksListTab.tsx';

const TasksList = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const { tasks, activeTasks, completedTasks, clearCompleted } = useTasks();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const counts: Record<FilterType, number> = {
    all: tasks.length,
    active: activeTasks.length,
    completed: completedTasks.length,
  };

  const labelMap: Record<FilterType, string> = {
    all: 'Все',
    active: 'Активные',
    completed: 'Выполненные',
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % filtersList.length;
      tabRefs.current[newIndex]?.focus();
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + filtersList.length) % filtersList.length;
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <>
      <div className="flex gap-2 mb-6 justify-center" role="tablist" aria-label="Фильтры списка">
        {filtersList.map((f, i) => (
          <button
            key={f}
            ref={el => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            aria-selected={filter === f}
            aria-controls={`${f}-tasks`}
            id={`${f}-tab`}
            onClick={() => {
              setFilter(f);
            }}
            onKeyDown={e => handleKeyDown(e, i)}
            className={`cursor-pointer px-4 py-2 rounded-lg font-medium ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {labelMap[f]} ({counts[f]})
          </button>
        ))}

        <button className="cursor-pointer disabled:cursor-not-allowed" disabled={tasks.length === 0} aria-label="Очистить весь список">
          <Trash className="text-red-500" />
        </button>
      </div>

      <h3 className="sr-only">Список задач</h3>
      {filtersList.map(f => (
        <div key={f} id={`${f}-tasks`} className="space-y-2" role="tabpanel" aria-labelledby={`${f}-tab`} hidden={filter !== f}>
          <TasksListTab filter={f} tasks={f === 'all' ? tasks : f === 'active' ? activeTasks : completedTasks} />
        </div>
      ))}

      {completedTasks.length > 0 && filter !== 'active' && (
        <div className="mb-6 text-center">
          <button className="cursor-pointer px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium" onClick={clearCompleted}>
            <Trash2 size={16} className="inline mr-2" />
            Очистить выполненные
          </button>
        </div>
      )}
    </>
  );
};

export default TasksList;
