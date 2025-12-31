/**
 * Callback
 */
// function waitAndRun() {
//   setTimeout(() => {
//     console.log("끝");
//   }, 2000);
// }

// waitAndRun();

// function waitAndRun2() {
//   setTimeout(() => {
//     console.log("1번 콜백 끝");
//     setTimeout(() => {
//       console.log("2번 콜백 끝");
//       setTimeout(() => {
//         console.log("3번 콜백 끝");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }
// waitAndRun2();
/**
 * Promise
 */
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("완료");
//   }, 2000);
// });

// timeoutPromise.then((res) => {
//   console.log("---then---");
//   console.log(res);
// });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료");
      // reject("에러");
    }, seconds * 1000);
  });

// getPromise(3)
//   .then((res) => {
//     console.log("--- first then---");
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("---first catch---");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("---finally---");
//   });
// .then((res) => {
//   console.log("--- second then ---");
//   console.log(res);

//   return getPromise(4);
// })
// .then((res) => {
//   console.log("--- third then ---");
//   console.log(res);

//   return getPromise(4);
// });

// promise는 비동기로 실행됨
// 가장 느린 함수 기준으로 된다
// 실행은 동시에 된다
Promise.all([getPromise(1), getPromise(4), getPromise(1)]).then((res) => {
  console.log(res);
});
