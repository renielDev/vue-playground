<template>
  <div>
    <input
      type="text"
      v-model="todoText"
    >
    <button type="button" name="button" @click="setText">Add todo</button>
    {{todoText}}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      todoText: this.text
    }
  },

  methods: {
    setText() {
      this.$emit('set', this.todoText)
      this.$emit('add')
      this.todoText = ''
    },
  },

}
</script>
