const STORAGE_KEY = "todoItems";

// �������� ������ �� localStorage
export function loadTasksFromStorage() {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

// ��������� ������ � localStorage
export function saveTasksToStorage(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}