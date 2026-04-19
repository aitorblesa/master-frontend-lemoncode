<template>
  <div class="app">
    <header class="header">
      <h1>Tareas</h1>
      <p class="subtitle">Doble click para editar una tarea</p>
    </header>

    <main class="main">
      <form class="add-form" @submit.prevent="handleAdd">
        <input
          v-model="newTask"
          type="text"
          placeholder="¿Qué necesitas hacer?"
          class="add-input"
          ref="inputRef"
          aria-label="Nueva tarea"
        />
        <button type="submit" class="btn-add" aria-label="Añadir tarea">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </form>

      <TodoToolbar />

      <TransitionGroup
        name="list"
        tag="ul"
        class="todo-list"
        v-if="store.filteredTodos.length > 0"
      >
        <TodoItem
          v-for="todo in store.filteredTodos"
          :key="todo.id"
          :todo="todo"
        />
      </TransitionGroup>

      <div v-else-if="store.totalCount > 0" class="empty">
        No hay tareas que coincidan con el filtro.
      </div>
      <div v-else class="empty">Añade tu primera tarea.</div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "./stores/todoStore";
import TodoItem from "./components/TodoItem.vue";
import TodoToolbar from "./components/TodoToolbar.vue";

const store = useTodoStore();
const newTask = ref("");
const inputRef = ref(null);

function handleAdd() {
  store.addTodo(newTask.value);
  newTask.value = "";
  inputRef.value?.focus();
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700&family=Playfair+Display:wght@700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #f5f0eb;
  --surface: #fff;
  --surface-hover: #faf7f4;
  --text: #2c2420;
  --text-secondary: #8a7e76;
  --accent: #c45d3e;
  --accent-hover: #a84e33;
  --border: #e5ddd5;
  --done-bg: #f0ece8;
  --done-text: #b0a89e;
  --danger: #c44040;
  --radius: 12px;
  --shadow: 0 1px 3px rgba(44, 36, 32, 0.06);
  --shadow-lg: 0 8px 30px rgba(44, 36, 32, 0.08);
}

body {
  font-family: "DM Sans", sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.app {
  max-width: 580px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}

.header {
  margin-bottom: 36px;
}

.header h1 {
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  line-height: 1.1;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-top: 6px;
}

.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

.add-input {
  flex: 1;
  padding: 14px 18px;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;
}

.add-input::placeholder {
  color: var(--text-secondary);
}

.add-input:focus {
  border-color: var(--accent);
}

.btn-add {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.15s;
}

.btn-add svg {
  width: 22px;
  height: 22px;
}

.btn-add:hover {
  background: var(--accent-hover);
}

.btn-add:active {
  transform: scale(0.94);
}

/* Toolbar */
.toolbar {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: var(--shadow);
}

.toolbar-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.search-wrap {
  flex: 1;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--text-secondary);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 9px 12px 9px 36px;
  font-size: 0.875rem;
  font-family: inherit;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: var(--accent);
}

.filter-group {
  display: flex;
  gap: 4px;
}

.filter-btn {
  padding: 6px 14px;
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 500;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn.active {
  background: var(--text);
  color: var(--bg);
  border-color: var(--text);
}

.filter-btn:hover:not(.active) {
  border-color: var(--text-secondary);
  color: var(--text);
}

.sort-select {
  margin-left: auto;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-family: inherit;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  outline: none;
}

.sort-select:focus {
  border-color: var(--accent);
}

.actions-row {
  justify-content: space-between;
}

.counter {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.bulk-actions {
  display: flex;
  gap: 12px;
}

.btn-link {
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 500;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.btn-link:hover {
  color: var(--accent-hover);
}

.btn-link.btn-danger {
  color: var(--danger);
}

/* Todo list */
.todo-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition:
    background 0.2s,
    border-color 0.2s,
    opacity 0.3s;
}

.todo-item:hover {
  border-color: #d5cdc5;
}

.todo-item.done {
  background: var(--done-bg);
  border-color: transparent;
}

.todo-item.done .todo-text {
  text-decoration: line-through;
  color: var(--done-text);
}

/* Custom checkbox */
.checkbox-wrap {
  position: relative;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.checkbox-wrap input {
  position: absolute;
  opacity: 0;
  width: 22px;
  height: 22px;
  cursor: pointer;
  z-index: 1;
}

.checkmark {
  width: 22px;
  height: 22px;
  border: 2px solid var(--border);
  border-radius: 6px;
  display: grid;
  place-items: center;
  transition: all 0.2s;
}

.checkmark svg {
  width: 14px;
  height: 14px;
  color: #fff;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.15s;
}

.checkbox-wrap input:checked + .checkmark {
  background: var(--accent);
  border-color: var(--accent);
}

.checkbox-wrap input:checked + .checkmark svg {
  opacity: 1;
  transform: scale(1);
}

.checkbox-wrap input:focus-visible + .checkmark {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.todo-text {
  flex: 1;
  font-size: 0.95rem;
  line-height: 1.4;
  cursor: default;
  user-select: none;
}

.edit-field {
  flex: 1;
  padding: 4px 8px;
  font-size: 0.95rem;
  font-family: inherit;
  border: 1px solid var(--accent);
  border-radius: 6px;
  outline: none;
  background: var(--surface);
  color: var(--text);
}

.btn-remove {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: none;
  border: none;
  border-radius: 6px;
  color: var(--text-secondary);
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.15s,
    color 0.15s,
    background 0.15s;
}

.btn-remove svg {
  width: 16px;
  height: 16px;
}

.todo-item:hover .btn-remove,
.btn-remove:focus-visible {
  opacity: 1;
}

.btn-remove:hover {
  color: var(--danger);
  background: rgba(196, 64, 64, 0.08);
}

/* Transitions */
.list-enter-active {
  transition: all 0.3s ease;
}

.list-leave-active {
  transition: all 0.25s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.list-move {
  transition: transform 0.3s ease;
}

.empty {
  text-align: center;
  padding: 48px 20px;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 480px) {
  .app {
    padding: 28px 16px 60px;
  }

  .header h1 {
    font-size: 2.2rem;
  }

  .toolbar-row {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-group {
    justify-content: center;
  }

  .sort-select {
    margin-left: 0;
  }

  .actions-row {
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .btn-remove {
    opacity: 1;
  }
}
</style>
