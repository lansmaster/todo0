const API_URL = "ВАШ_API_URL";

// Получение задач из Google Таблицы
export async function fetchTasks() {
    const response = await axios.get(API_URL);
    return response.data;
}

// Добавление задачи в Google Таблицу
export async function addTask(task) {
    await axios.post(API_URL, { action: 'add', task });
}

// Удаление задачи из Google Таблицы
export async function deleteTask(task) {
    await axios.post(API_URL, { action: 'delete', task });
}