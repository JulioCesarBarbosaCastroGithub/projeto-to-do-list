const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

// Função para renderizar as tarefas na tela
function renderTasks() {
    
    // Limpa a lista de tarefas para evitar duplicação
    taskList.innerHTML = '';

    // Cria os itens da lista com base no array de tarefas
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Botão para remover a tarefa
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => {
            removeTask(index);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

    });
}

// Função para adicionar uma nova tarefa ao array

function addTask() {
    const task = taskInput.value.trim(); // Remove espaços em branco
    if(task !== '') {
        tasks.push(task); // Adiciona a nova tarefa ao array
        taskInput.value = ''; // Limpa o campo de input
        renderTasks(); // Atualiza a lista de tarefas na tela
    }
}

// Função para remover uma tarefa do array
function removeTask(index) {
    tasks.splice(index, 1); // Remove a tarefa pelo índice
    renderTasks(); // Atualiza a lista de tarefas na tela
}

// Event listener para o botão de adicionar
addTaskButton.addEventListener('click', addTask);

// Renderiza as tarefas iniciais (se houver)
renderTasks();