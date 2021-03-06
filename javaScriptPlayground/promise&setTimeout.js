/* description：
========================================================

1、promise在new的时候会执行其中的方法，但是不会继续执行后面的.then
2、setTimeout是宏任务，而promise是微任务，所有会执行完所有的promise之后再去执行setTimeout任务。
3、主程序、宏任务、微任务的执行顺序为，主程序 => 微任务 => 宏任务

========================================================
*/
console.log(1);
setTimeout(() => {
  console.log(2);
  const promise = new Promise(((resolve, reject) => {
    console.log(7);
    resolve();
  })).then(() => {
    console.log(8);
  });
}, 1000);
setTimeout(() => {
  console.log(10);
  const promise = new Promise(((resolve, reject) => {
    console.log(11);
    resolve();
  })).then(() => {
    console.log(12);
  });
}, 0);
const promise = new Promise(((resolve, reject) => {
  console.log(3);
  resolve();
})).then(() => {
  console.log(4);
}).then(() => {
  console.log(9);
});
console.log(5);
