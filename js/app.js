import { loadTasksFromStorage, saveTasksToStorage } from './storage.js';
import { createAppTitle, createTodoItemForm, createTodoList } from './dom-utils.js';
import { addTaskToList } from './todo-functions.js';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('todo-app');

    appContainer.append(createAppTitle('Мой TODO список'));

    const { form, input } = createTodoItemForm();
    appContainer.append(form);

    const todoList = createTodoList();
    appContainer.append(todoList);

    let tasks = loadTasksFromStorage();

    if (tasks.length === 0) {
        tasks = ["Купить продукты", "Позвонить другу", "Прочитать книгу"];
        saveTasksToStorage(tasks);
    }

    tasks.forEach(task => addTaskToList(task, todoList, tasks));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (tasks.includes(taskName)) return;

        const taskName = input.value.trim();
        if (!taskName) return;

        addTaskToList(taskName, todoList, tasks);
        input.value = '';
    });
});