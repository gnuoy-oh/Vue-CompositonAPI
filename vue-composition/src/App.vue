<template>
  <TodoHeader></TodoHeader>
  <!-- @하위컴포넌트 이벤트 명 = "상위컴포넌트 메서드 명" -->
  <TodoInput @add="addTodoItem"></TodoInput>
  <!-- :프롭스 명 = "상위컴포넌트 데이터 명" -->
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
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

    function addTodoItem(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    function removeTodoItem(item, index) {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item);
    }

    return { todoItems, addTodoItem, removeTodoItem };
  }
};
</script>

<style lang="scss" scoped></style>
