import { fetchTasks, addTask } from './api.js';
import { createAppTitle, createTodoItemForm, createTodoList } from './dom-utils.js';
import { addTaskToList } from './todo-functions.js';
import { loadTasksFromStorage, saveTasksToStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', async () => {
    const appContainer = document.getElementById('todo-app');

    // Создаем заголовок
    appContainer.append(createAppTitle('Мой TODO список'));

    // Создаем форму и список
    const { form, input } = createTodoItemForm();
    appContainer.append(form);

    const todoList = createTodoList();
    appContainer.append(todoList);

    // Загружаем данные из localStorage или создаем начальные
    let tasks = loadTasksFromStorage();

    if (tasks.length === 0) {
        // Если хранилище пустое, задаем начальные задачи
        tasks = ["Купить продукты", "Позвонить другу", "Прочитать книгу"];
        saveTasksToStorage(tasks);
    }

    // Отрисовываем задачи из localStorage
    tasks.forEach(task => addTaskToList(task, todoList, tasks));

    // Добавление новой задачи
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = input.value.trim();

        if (taskName) {
            addTaskToList(taskName, todoList, tasks);
            input.value = '';
        }
    });
});