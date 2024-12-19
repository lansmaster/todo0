import { createTodoItem } from './dom-utils.js';
import { saveTasksToStorage } from './storage.js';

// ���������� ������ � ������
export function addTaskToList(taskName, todoList, tasks) {
    const { li, deleteButton } = createTodoItem(taskName);
    todoList.append(li);

    // �������� ������
    deleteButton.addEventListener('click', () => {
        const index = tasks.indexOf(taskName);
        if (index !== -1) tasks.splice(index, 1);
        saveTasksToStorage(tasks); // ��������� localStorage
        li.remove();
    });

    // ��������� ������ � ������ � localStorage
    tasks.push(taskName);
    saveTasksToStorage(tasks);
}