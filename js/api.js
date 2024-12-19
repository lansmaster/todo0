const API_URL = "ВАШ_API_URL";

export async function fetchTasks() {
    const response = await axios.get(API_URL);
    return response.data;
}

export async function addTask(task) {
    await axios.post(API_URL, { action: 'add', task });
}

export async function deleteTask(task) {
    await axios.post(API_URL, { action: 'delete', task });
}