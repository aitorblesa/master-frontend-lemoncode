<template>
  <li :class="['todo-item', { done: todo.done }]">
    <label class="checkbox-wrap">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="store.toggleTodo(todo.id)"
        :aria-label="`Marcar ${todo.text} como ${todo.done ? 'pendiente' : 'completada'}`"
      />
      <span class="checkmark" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        >
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </span>
    </label>

    <template v-if="editing">
      <input
        ref="editInput"
        v-model="editText"
        class="edit-field"
        @keydown.enter="saveEdit"
        @blur="saveEdit"
        @keydown.escape="cancelEdit"
      />
    </template>
    <template v-else>
      <span class="todo-text" @dblclick="startEdit">{{ todo.text }}</span>
    </template>

    <button
      class="btn-remove"
      @click="store.removeTodo(todo.id)"
      :aria-label="`Eliminar ${todo.text}`"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </li>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { useTodoStore } from "../stores/todoStore";

const props = defineProps({
  todo: { type: Object, required: true },
});

const store = useTodoStore();
const editing = ref(false);
const editText = ref("");
const editInput = ref(null);

function startEdit() {
  editing.value = true;
  editText.value = props.todo.text;
  nextTick(() => editInput.value?.focus());
}

function saveEdit() {
  if (editText.value.trim()) {
    store.editTodo(props.todo.id, editText.value);
  }
  editing.value = false;
}

function cancelEdit() {
  editing.value = false;
}
</script>
