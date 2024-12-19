import { createTodoItem } from './dom-utils.js';
import { saveTasksToStorage } from './storage.js';

export function addTaskToList(taskName, todoList, tasks) {

    const { li, doneButton, deleteButton } = createTodoItem(taskName);
    todoList.append(li);

    doneButton.addEventListener('click', () => {
        li.classList.add('list-group-item-success');
    });

    deleteButton.addEventListener('click', () => {
        const index = tasks.indexOf(taskName);
        if (index !== -1) tasks.splice(index, 1);

        saveTasksToStorage(tasks);
        li.remove();
    });


    if (tasks.includes(taskName)) return;

    tasks.push(taskName);
    saveTasksToStorage(tasks);
}