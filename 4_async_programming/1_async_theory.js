/**
 * Async theory
 */
// function longWork() {
//   const now = new Date();

//   /**
//    * milliseconds since epoch
//    * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 미리초로 변환한다
//    */
//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   while (new Date().getTime() < afterTwoSeconds) {}

//   console.log("완료");
// }

// console.log("Hello");
// longWork();
// console.log("World");

function longWork() {
  // 비동기
  setTimeout(() => {
    console.log("완료");
  }, 2000);
}

console.log("Hello");
longWork();
console.log("World");

/**
 * Event Loop
 *
 * Call stack
 * Memory Heap
 * Event Loop()
 * Task Queue/Event Queue
 */
