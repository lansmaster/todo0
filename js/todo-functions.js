import { createTodoItem } from './dom-utils.js';
import { saveTasksToStorage } from './storage.js';

// Добавление задачи в список
export function addTaskToList(taskName, todoList, tasks) {
    const { li, deleteButton } = createTodoItem(taskName);
    todoList.append(li);

    // Удаление задачи
    deleteButton.addEventListener('click', () => {
        const index = tasks.indexOf(taskName);
        if (index !== -1) tasks.splice(index, 1);
        saveTasksToStorage(tasks); // Обновляем localStorage
        li.remove();
    });

    // Сохраняем задачу в массив и localStorage
    tasks.push(taskName);
    saveTasksToStorage(tasks);
}