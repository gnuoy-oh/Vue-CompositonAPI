import { ref } from "vue";

function useTodo() {
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

  function addTodoItem(todo) {
    todoItems.value.push(todo);
    localStorage.setItem(todo, todo);
  }

  function removeTodoItem(item, index) {
    todoItems.value.splice(index, 1);
    localStorage.removeItem(item);
  }

  return { todoItems, fetchTodos, addTodoItem, removeTodoItem };
}

export { useTodo };
