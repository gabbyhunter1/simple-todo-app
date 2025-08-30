import { useTasks } from '../hooks/useTasks.ts';

const BottomText = () => {
  const { tasks, activeTasks } = useTasks();

  function getVerb(count: number): string {
    return count === 1 ? 'осталась' : 'осталось';
  }

  function getTaskWord(count: number): string {
    const lastTwo = count % 100;
    const lastOne = count % 10;

    if (lastTwo >= 11 && lastTwo <= 14) {
      return 'задач';
    }

    switch (lastOne) {
      case 1:
        return 'задача';
      case 2:
      case 3:
      case 4:
        return 'задачи';
      default:
        return 'задач';
    }
  }

  return (
    <>
      {tasks.length > 0 ? (
        <p className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-600 text-center" aria-live="polite">
          {activeTasks.length > 0
            ? `${getVerb(activeTasks.length)} ${activeTasks.length} ${getTaskWord(activeTasks.length)}`
            : 'Все задачи выполнены! 🎉'}
        </p>
      ) : (
        <p className="sr-only" aria-live="polite">
          Задач нет
        </p>
      )}
    </>
  );
};

export default BottomText;
