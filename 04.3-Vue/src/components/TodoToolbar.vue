<template>
  <div class="toolbar" v-if="store.totalCount > 0">
    <div class="toolbar-row">
      <div class="search-wrap">
        <svg
          class="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
        <input
          v-model="store.search"
          type="text"
          placeholder="Buscar tareas..."
          class="search-input"
          aria-label="Buscar tareas"
        />
      </div>
    </div>

    <div class="toolbar-row">
      <div class="filter-group" role="radiogroup" aria-label="Filtrar tareas">
        <button
          v-for="f in filters"
          :key="f.value"
          :class="['filter-btn', { active: store.filter === f.value }]"
          @click="store.filter = f.value"
          :aria-pressed="store.filter === f.value"
        >
          {{ f.label }}
        </button>
      </div>

      <select
        v-model="store.sortBy"
        class="sort-select"
        aria-label="Ordenar tareas"
      >
        <option value="default">Por defecto</option>
        <option value="alpha">Alfabético</option>
        <option value="completed">Completadas primero</option>
        <option value="pending">Pendientes primero</option>
      </select>
    </div>

    <div class="toolbar-row actions-row">
      <span class="counter">
        {{ store.pendingCount }} pendiente{{
          store.pendingCount !== 1 ? "s" : ""
        }}
        · {{ store.completedCount }} completada{{
          store.completedCount !== 1 ? "s" : ""
        }}
      </span>
      <div class="bulk-actions">
        <button class="btn-link" @click="store.toggleAll">
          {{ allDone ? "Desmarcar" : "Completar" }} todas
        </button>
        <button
          v-if="store.completedCount > 0"
          class="btn-link btn-danger"
          @click="store.clearCompleted"
        >
          Borrar completadas
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTodoStore } from "../stores/todoStore";

const store = useTodoStore();

const filters = [
  { value: "all", label: "Todas" },
  { value: "pending", label: "Pendientes" },
  { value: "completed", label: "Completadas" },
];

const allDone = computed(
  () => store.totalCount > 0 && store.completedCount === store.totalCount,
);
</script>
