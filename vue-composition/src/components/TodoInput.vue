<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, context) {
    // data 정의
    const todoInput = ref(""); // 기본값 정의!

    // method
    function addTodo() {
      const todo = todoInput.value;
      context.emit("add", todo);
      clearTodo();
    }

    const clearTodo = () => {
      todoInput.value = "";
    };

    return { todoInput, addTodo };
  }
};
</script>

<style lang="scss" scoped></style>
