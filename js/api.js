const API_URL = "���_API_URL";

// ��������� ����� �� Google �������
export async function fetchTasks() {
    const response = await axios.get(API_URL);
    return response.data;
}

// ���������� ������ � Google �������
export async function addTask(task) {
    await axios.post(API_URL, { action: 'add', task });
}

// �������� ������ �� Google �������
export async function deleteTask(task) {
    await axios.post(API_URL, { action: 'delete', task });
}