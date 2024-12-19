
export function createAppTitle(title) {
    const h1 = document.createElement('h1');
    h1.innerText = title;
    return h1;
}

export function createTodoItemForm() {
    const form = document.createElement('form');
    form.classList.add('input-group', 'mb-3');

    const input = document.createElement('input');
    input.classList.add('form-control');
    input.placeholder = 'Введите новое дело';
    input.required = true;

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('input-group-append');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.innerText = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input, buttonWrapper);

    return { form, input, button };
}

export function createTodoList() {
    return document.createElement('ul');
}

export function createTodoItem(name) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.innerText = name;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.innerText = 'Удалить';
    li.append(deleteButton);

    return { li, deleteButton };
}