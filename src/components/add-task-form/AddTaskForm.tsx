import { Plus } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { useTasks } from '../../hooks/useTasks.ts';

const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTask } = useTasks();

  const handleAddTaskButton = useCallback(() => {
    const trimmedText = inputValue.trim();
    if (!trimmedText) return;

    addTask(trimmedText);
  }, [addTask, inputValue]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        e.preventDefault();
        addTask(inputValue.trim());
      }
    },
    [addTask, inputValue]
  );

  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Добавить новую задачу..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          maxLength={200}
        />
        <button
          disabled={!inputValue.trim()}
          onClick={handleAddTaskButton}
          className="cursor-pointer px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Добавить задачу">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
