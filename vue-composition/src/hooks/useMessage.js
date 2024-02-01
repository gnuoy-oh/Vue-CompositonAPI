import { ref } from "vue";

function useMessage() {
  // ** data 정의
  // const message = "hello"; - 자바스립트 선언 방식
  const message = ref("Hello~"); // Vue 리액티비리 작성 방식

  // ** methods 정의
  function changeMessage() {
    message.value = "hi"; // .value 를 통해 값을 제어한다.
  }

  return {
    message,
    changeMessage
  };
}
export { useMessage };
