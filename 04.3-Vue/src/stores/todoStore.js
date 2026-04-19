import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTodoStore = defineStore('todos', () => {
  const saved = localStorage.getItem('todos')
  const todos = ref(saved ? JSON.parse(saved) : [])

  watch(todos, (val) => {
    localStorage.setItem('todos', JSON.stringify(val))
  }, { deep: true })

  const filter = ref('all')
  const search = ref('')
  const sortBy = ref('default')

  const filteredTodos = computed(() => {
    let result = [...todos.value]

    if (search.value.trim()) {
      const q = search.value.toLowerCase()
      result = result.filter(t => t.text.toLowerCase().includes(q))
    }

    if (filter.value === 'completed') {
      result = result.filter(t => t.done)
    } else if (filter.value === 'pending') {
      result = result.filter(t => !t.done)
    }

    if (sortBy.value === 'alpha') {
      result.sort((a, b) => a.text.localeCompare(b.text))
    } else if (sortBy.value === 'completed') {
      result.sort((a, b) => Number(b.done) - Number(a.done))
    } else if (sortBy.value === 'pending') {
      result.sort((a, b) => Number(a.done) - Number(b.done))
    }

    return result
  })

  const completedCount = computed(() => todos.value.filter(t => t.done).length)
  const totalCount = computed(() => todos.value.length)
  const pendingCount = computed(() => totalCount.value - completedCount.value)

  function addTodo(text) {
    if (!text.trim()) return
    todos.value.push({
      id: Date.now(),
      text: text.trim(),
      done: false,
    })
  }

  function removeTodo(id) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.done = !todo.done
  }

  function editTodo(id, newText) {
    const todo = todos.value.find(t => t.id === id)
    if (todo && newText.trim()) {
      todo.text = newText.trim()
    }
  }

  function toggleAll() {
    const allDone = todos.value.every(t => t.done)
    todos.value.forEach(t => (t.done = !allDone))
  }

  function clearCompleted() {
    todos.value = todos.value.filter(t => !t.done)
  }

  return {
    todos,
    filter,
    search,
    sortBy,
    filteredTodos,
    completedCount,
    totalCount,
    pendingCount,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
    toggleAll,
    clearCompleted,
  }
})
