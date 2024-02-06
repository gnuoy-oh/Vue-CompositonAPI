<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <!-- @하위컴포넌트 이벤트 명 = "상위컴포넌트 메서드 명" -->
  <TodoInput @add="addTodoItem"></TodoInput>
  <!-- :프롭스 명 = "상위컴포넌트 데이터 명" -->
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import { onBeforeMount } from "vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import { useTodo } from "./hooks/useTodo.js";

export default {
  components: { TodoHeader, TodoInput, TodoLis },
  setup() {
    const { todoItems, addTodoItem, removeTodoItem, fetchTodos } = useTodo();

    const title = "할일 앱";

    // 라이프사이클 API 가 적용된 구간
    // onBeforeMount: 화면에 컴포넌트가 불러와지기 전에 데이터를 불러온다.
    onBeforeMount(() => {
      // console.log("onBeforeMount called");
      todoItems.value = fetchTodos();
    });

    return { title, fetchTodos, todoItems, addTodoItem, removeTodoItem };
  }
};
</script>

<style lang="scss" scoped></style>
