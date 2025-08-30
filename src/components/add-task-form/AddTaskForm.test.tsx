import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import AddTaskForm from './AddTaskForm.tsx';

// Mock the useTasks hook
const mockAddTask = vi.fn();
vi.mock('../../hooks/useTasks.ts', () => ({
  useTasks: () => ({
    addTask: mockAddTask,
  }),
}));

describe('AddTaskForm', () => {
  beforeEach(() => {
    mockAddTask.mockClear();
  });

  it('updates input value when user types', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');

    await user.type(input, 'New task');

    expect(input).toHaveValue('New task');
  });

  it('button is disabled when input is empty', () => {
    render(<AddTaskForm />);

    const button = screen.getByRole('button', { name: 'Добавить задачу' });

    expect(button).toBeDisabled();
  });

  it('button is disabled when input contains only whitespace', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const button = screen.getByRole('button', { name: 'Добавить задачу' });

    await user.type(input, '   ');

    expect(button).toBeDisabled();
  });

  it('button is enabled when input has valid text', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const button = screen.getByRole('button', { name: 'Добавить задачу' });

    await user.type(input, 'Valid task');

    expect(button).toBeEnabled();
  });

  it('calls addTask when button is clicked with valid input', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const button = screen.getByRole('button', { name: 'Добавить задачу' });

    await user.type(input, 'New task');
    await user.click(button);

    expect(mockAddTask).toHaveBeenCalledWith('New task');
    expect(mockAddTask).toHaveBeenCalledTimes(1);
  });

  it('trims whitespace when adding task via button click', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const button = screen.getByRole('button', { name: 'Добавить задачу' });

    await user.type(input, '  Task with spaces  ');
    await user.click(button);

    expect(mockAddTask).toHaveBeenCalledWith('Task with spaces');
  });

  it('does not call addTask when button is clicked with empty input', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');

    await user.type(input, 'text');
    await user.clear(input);

    const button = screen.getByRole('button', { name: 'Добавить задачу' });
    expect(button).toBeDisabled();
  });

  it('calls addTask when Enter key is pressed with valid input', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');

    await user.type(input, 'Task via Enter');
    await user.keyboard('{Enter}');

    expect(mockAddTask).toHaveBeenCalledWith('Task via Enter');
    expect(mockAddTask).toHaveBeenCalledTimes(1);
  });

  it('trims whitespace when adding task via Enter key', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');

    await user.type(input, '  Enter task with spaces  ');
    await user.keyboard('{Enter}');

    expect(mockAddTask).toHaveBeenCalledWith('Enter task with spaces');
  });

  it('does not call addTask when Enter is pressed with empty input', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');

    await user.click(input);
    await user.keyboard('{Enter}');

    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it('does not call addTask when Enter is pressed with only whitespace', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');

    await user.type(input, '   ');
    await user.keyboard('{Enter}');

    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it('add a task button works', async () => {
    const user = userEvent.setup();
    render(<AddTaskForm />);

    const input = screen.getByPlaceholderText('Добавить новую задачу...');
    const button = screen.getByRole('button', { name: 'Добавить задачу' });

    await user.type(input, 'Test task');
    await user.click(button);

    expect(mockAddTask).toHaveBeenCalledWith('Test task');
  });
});
