const STORAGE_KEY = "todoItems";

// Получить задачи из localStorage
export function loadTasksFromStorage() {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

// Сохранить задачи в localStorage
export function saveTasksToStorage(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}