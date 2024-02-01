<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button>추가</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // data 정의
    const todoInput = ref(""); // 기본값 정의!

    return { todoInput };
  }
};
</script>

<style lang="scss" scoped></style>
