import { fetchTasks, addTask } from './api.js';
import { createAppTitle, createTodoItemForm, createTodoList } from './dom-utils.js';
import { addTaskToList } from './todo-functions.js';
import { loadTasksFromStorage, saveTasksToStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', async () => {
    const appContainer = document.getElementById('todo-app');

    // ������� ���������
    appContainer.append(createAppTitle('��� TODO ������'));

    // ������� ����� � ������
    const { form, input } = createTodoItemForm();
    appContainer.append(form);

    const todoList = createTodoList();
    appContainer.append(todoList);

    // ��������� ������ �� localStorage ��� ������� ���������
    let tasks = loadTasksFromStorage();

    if (tasks.length === 0) {
        // ���� ��������� ������, ������ ��������� ������
        tasks = ["������ ��������", "��������� �����", "��������� �����"];
        saveTasksToStorage(tasks);
    }

    // ������������ ������ �� localStorage
    tasks.forEach(task => addTaskToList(task, todoList, tasks));

    // ���������� ����� ������
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = input.value.trim();

        if (taskName) {
            addTaskToList(taskName, todoList, tasks);
            input.value = '';
        }
    });
});