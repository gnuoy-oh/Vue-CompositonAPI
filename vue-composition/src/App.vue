<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <!-- @하위컴포넌트 이벤트 명 = "상위컴포넌트 메서드 명" -->
  <TodoInput @add="addTodoItem"></TodoInput>
  <!-- :프롭스 명 = "상위컴포넌트 데이터 명" -->
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import { ref, onBeforeMount, onMounted, onUnmounted } from "vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: { TodoHeader, TodoInput, TodoList },
  setup() {
    // data
    const todoItems = ref([]);
    const title = ref("할일 앱");

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

    console.log("setup called");

    // 라이프사이클 API 가 적용된 구간
    // onBeforeMount: 화면에 컴포넌트가 불러와지기 전에 데이터를 불러온다.
    onBeforeMount(() => {
      console.log("onBeforeMount called");
      todoItems.value = fetchTodos();
    });

    onMounted(() => {
      console.log("onMounted called");
    });

    // 컴포넌트가 사라졌을 때 호출되는 라이프사이클
    onUnmounted(() => {
      console.log("onUnmounted called");
    });

    function addTodoItem(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    function removeTodoItem(item, index) {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item);
    }

    return { title, todoItems, addTodoItem, removeTodoItem };
  }
};
</script>

<style lang="scss" scoped></style>
