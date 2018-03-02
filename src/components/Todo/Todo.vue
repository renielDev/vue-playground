<template>
  <div>

    <TodoForm
      @add="addTodo"
      :text="newTodoText"
      @set="setTodo"
    />
    <ul>
      <TodoItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

let nextTodoId = 1;

export default {
  components: {
    TodoItem, TodoForm
  },

  data() {
    return {
      newTodoText: '',
      todos: []
    }
  },

  methods: {
    setTodo(todo) {
      this.newTodoText = todo
      console.log(todo)
    },

    addTodo() {
      const trimmedText = this.newTodoText.trim()

      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        })
      }

      this.newTodoText = '';
    }
  }
}
</script>
