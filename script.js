let tasks = JSON.parse(localStorage.getItem('control_tareas')) || [];
let currentFilter = 'all';

const form = document.getElementById('todo-form');
const tableBody = document.getElementById('table-body');

// Función para guardar y redibujar
function updateUI() {
    localStorage.setItem('control_tareas', JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    tableBody.innerHTML = '';
    
    // Aplicar filtro
    let filtered = tasks;
    if (currentFilter === 'pending') filtered = tasks.filter(t => !t.done);
    if (currentFilter === 'completed') filtered = tasks.filter(t => t.done);

    filtered.forEach(task => {
        const tr = document.createElement('tr');
        if (task.done) tr.className = 'task-done';

        tr.innerHTML = `
            <td>
                <button class="btn-action" onclick="toggleStatus(${task.id})">
                    ${task.done ? '[ DESHACER ]' : '[ COMPLETAR ]'}
                </button>
            </td>
            <td>
                <strong>${task.title}</strong><br>
                <small>${task.desc || 'Sin descripción'}</small>
            </td>
            <td class="prio-${task.priority}">${task.priority.toUpperCase()}</td>
            <td>
                <button class="btn-action btn-delete" onclick="deleteTask(${task.id})">BORRAR</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    document.getElementById('count-total').innerText = tasks.length;
    document.getElementById('count-done').innerText = tasks.filter(t => t.done).length;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = {
        id: Date.now(),
        title: document.getElementById('in-title').value,
        priority: document.getElementById('in-priority').value,
        desc: document.getElementById('in-desc').value,
        done: false
    };
    tasks.push(newTask);
    form.reset();
    updateUI();
});

function toggleStatus(id) {
    tasks = tasks.map(t => t.id === id ? {...t, done: !t.done} : t);
    updateUI();
}

function deleteTask(id) {
    if (confirm('¿Eliminar esta tarea definitivamente?')) {
        tasks = tasks.filter(t => t.id !== id);
        updateUI();
    }
}

function filterTasks(type) {
    currentFilter = type;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderTasks();
}

// Carga inicial
renderTasks();