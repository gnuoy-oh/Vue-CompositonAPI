<template>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList :todoItems="todoItems"></TodoList>
</template>

<script>
import { ref } from "vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: { TodoHeader, TodoInput, TodoList },
  setup() {
    // data
    const todoItems = ref([]);

    // methods
    // 기능: 하나의 온전한 함수-> 로컬스토리지의 아이템을 다 불러와서 하나의 배열로 만들어 주는 기능
    function fetchTodos() {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        // items.value.push(todoItem);
        result.push(todoItem);
      }
      return result;
    }

    todoItems.value = fetchTodos();

    return { todoItems };
  }
};
</script>

<style lang="scss" scoped></style>
